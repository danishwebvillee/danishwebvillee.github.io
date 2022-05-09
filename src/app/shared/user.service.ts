import { Injectable } from '@angular/core';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public afs: AngularFirestore) { }

  
  createNote(note:any){
    return this.afs.collection('notes').add(note);
  }
  userId() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? user.uid : '';
  }
  getNotes(id:any) { 
    // return this.afs.doc('notes/' + id).snapshotChanges();
    let data =  this.afs.collection('notes', ref => {
     // Compose a query using multiple .where() methods
      ref.orderBy("title", "asc")
     return ref
       .where('uid', '==', id)
    });
    return data.snapshotChanges()
   ///this.items = this.itemCollection.valueChanges();
    // return this.afs.collection('notes').valueChanges({ uid: id });
    //return this.afs.collection('notes').snapshotChanges()
    //.pipe(map((actions:any) => actions.map((a:any) => a.payload.doc.id)));
    // return this.afs.doc('notes/' + id).valueChanges();
  }

  getUsers() { 
    // return this.afs.doc('notes/' + id).snapshotChanges();
    let data =  this.afs.collection('users');
    return data.snapshotChanges()
  }

  getaNote(id: any) { 
    return this.afs.doc('notes/' + id).valueChanges();
  }
  updateNote(note: any) { 
    this.afs.doc('notes/' + note.id).update(note);
  }
  deleteNote(id: string){
    this.afs.doc('notes/' + id).delete();
  }
  loggedInUser() { 
   return JSON.parse(localStorage.getItem('user')!);
  }

  activeDeactiveUser(id:any, type:any) { 
    this.afs.doc('users/' + id).update({isVerified: type});
  }

  getTiming() { 
    let data =  this.afs.collection('timing');
    return data.snapshotChanges()
  }
  updateTiming(timing:any) { 
    this.afs.doc('timing/' + timing.id).update(timing);
  }
}
