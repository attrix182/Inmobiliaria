import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sb-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  user:any;

  constructor(private authSvc:AuthService) {}

  getUser() {
    this.authSvc.GetCurrentUser().then(u => {
      this.user = u;
      console.log(this.user);
    });
  }
  ngOnInit(): void { this.getUser()}
}
