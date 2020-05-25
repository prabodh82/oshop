
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ : Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  login(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }
  
}