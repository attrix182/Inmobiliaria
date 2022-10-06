import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AlertService } from './alert.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;

  currentUser: any;
  public isLogged: any = false;

  constructor(
    private alertSvc: AlertService,
    public afAuth: AngularFireAuth,
    private router: Router,
    private storageService: StorageService
  ) {
    afAuth.authState.subscribe((user) => (this.isLogged = user));
  }

  async onLogin(user: any) {
    const result = await this.afAuth.signInWithEmailAndPassword(user.email, user.password).then((userCredential) => {
      localStorage.setItem('token', userCredential.user.uid);
      return true;
    });
    return result;
  }

  async registerUser(formUser: User) {
    await this.onRegister(formUser.email, '123456').then((uid) => {
      let user: User;
      user = formUser;
      user.id = uid;
      console.log(user)
      this.storageService
        .InsertCustomID('users', uid, user)
        .then(() => this.alertSvc.alertCenter('success', 'Usuario agregado con exito'));
    });
  }

  async onRegister(email: string, password: string) {
    return new Promise<any>((resolve, rejected) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (response: any) => {
          resolve(response.user.uid);
        },
        (error: any) => {
          switch (error.code) {
            case 'auth/weak-password':
              rejected('Clave muy corta,minimo 6 caracteres');
              break;
            case 'auth/invalid-email':
              rejected('Email invalido');
              break;
            case 'auth/wrong-password':
              rejected('Clave invalida');
              break;
            case 'auth/email-already-in-use':
              rejected('El correo ya se encuentra registrado');
              break;
            default:
              rejected('ERROR');
              break;
          }
        }
      );
    });
  }

  GetCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  LogOutCurrentUser() {
    localStorage.removeItem('token');
    this.afAuth.signOut();
    this.router.navigateByUrl('/');
  }
}
