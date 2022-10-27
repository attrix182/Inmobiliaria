import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AlertService } from './alert.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  currentUser: any;
  public isLogged: any = false;

  constructor(
    private alertSvc: AlertService,
    public afAuth: Auth,
    private router: Router,
    private storageService: StorageService
  ) {
    this.isLogged = afAuth.currentUser
  }

  async onLogin(user: any) {
    return signInWithEmailAndPassword(this.afAuth, user.email, user.password).then((userCredential) => {
      localStorage.setItem('token', userCredential.user.uid);
      return true;
    });

  }

  async registerUser(formUser: User) {
    await this.onRegister(formUser.email, '123456').then((uid) => {
      let user: User;
      user = formUser;
      user.id = uid;
      this.storageService
        .InsertCustomID('users', uid, user)
        .then(() => this.alertSvc.alertCenter('success', 'Usuario agregado con exito'));
    });
  }

  async onRegister(email: string, password: string) {
    return  createUserWithEmailAndPassword(this.afAuth,email, password)
  }

  GetCurrentUser() {
    return this.afAuth.currentUser
  }

  LogOutCurrentUser() {
    localStorage.removeItem('token');
    this.afAuth.signOut();
    this.router.navigateByUrl('/');
  }
}
