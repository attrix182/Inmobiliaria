import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { SidebarOptions } from 'src/app/models/sidebar.model';
import { sidebar_options } from './admin-sidebar-options';

@Component({
  selector: 'sb-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements AfterViewInit {
  @Output() changeSection = new EventEmitter<any>();
  actualSection = this.router.url.split('/')[1];
  sideItems: SidebarOptions[] = sidebar_options


  constructor(
    private router: Router,
    private location: Location,
    private AuthSVC: AuthService,
    private alertSvc: AlertService
  ) {

  }

  ngAfterViewInit() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show');
  }

  goTo(section: string) {
    this.location.replaceState(`/${section}`);
    this.actualSection = section;
    this.changeSection.emit();
    setTimeout(() => {
      let sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    }, 200);
  }



  logout() {
    this.AuthSVC.LogOutCurrentUser();
  }

  onLogout() {
    this.alertSvc.confirmAlert().then((a) => {
      if (a) {
        this.logout();
      }
    });
  }
}
