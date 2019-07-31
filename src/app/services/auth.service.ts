import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<User | null>;
  id: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
      // tap(user => localStorage.setItem('user', JSON.stringify(user))),
      // startWith(JSON.parse(localStorage.getItem('user')))
    );
    this.afAuth.auth.onAuthStateChanged(user => console.log(user.uid));
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }

  private handleError(error: Error) {
    console.error(error);
    // this.notify.update(error.message, 'error');
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        // this.notify.update('Welcome new user!', 'success');
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        // this.notify.update('Welcome back!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
