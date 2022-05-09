import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimingComponent } from './update-timing.component';

describe('UpdateTimingComponent', () => {
  let component: UpdateTimingComponent;
  let fixture: ComponentFixture<UpdateTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTimingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
