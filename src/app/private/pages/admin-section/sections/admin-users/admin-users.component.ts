import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  btnText: string = 'Agregar usuario + ';
  showAddUser: boolean = false;
  users: any[] = [];
  userToEdit: User;

  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.storageSVC.GetAll('users').subscribe((u) => (this.users = u));
  }

  toggleShowAddUser() {
    if (this.showAddUser) {
      this.showAddUser = false;
      this.btnText = 'Agregar usuario + ';
    } else {
      this.showAddUser = true;
      this.btnText = 'Ver usuarios';
    }
  }

  sendEditUser(user: User | any) {
    this.showAddUser = true;
    this.userToEdit = user;
  }
}
