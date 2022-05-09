import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public afs: AngularFirestore
  ) {
    // Setting logged in user in localstorage else null
    this.signInOut()  
  }

  signInOut() { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // this.userData = user;
        // localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user')!);

        let data = this.afs.doc(`users/${user.uid}`).valueChanges()
        data.subscribe(d => { 
          console.log(d, "fsd afsadf sdafsad fsda fsdfsd")
          localStorage.setItem('user', JSON.stringify(d));
        })

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    this.signInOut()
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log(user, 'user')
    return (user !== null) ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        console.log(result, 'result')
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
 

}