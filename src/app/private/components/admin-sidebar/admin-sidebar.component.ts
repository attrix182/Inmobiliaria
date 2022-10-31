import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sb-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements AfterViewInit {
  @Output() changeSection = new EventEmitter<any>();
  actualSection = this.router.url.split('/')[1];
  sideItems: any[];

  constructor(private router: Router, private location: Location, private AuthSVC: AuthService) {
    this.setSideItems();
  }

  ngAfterViewInit() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show');
  }

  goTo(section: string) {
    this.location.replaceState(`/${section}`);
    this.actualSection = section;
    this.changeSection.emit();
  }

  setSideItems() {
    this.sideItems = [
      {
        name: 'Dashboard',
        icon: 'fas fa-calendar',
        link: 'admin-dashboard'
      },
      {
        name: 'Usuarios',
        icon: 'fas fa-user',
        link: 'admin-users'
      },
      {
        name: 'Propiedades',
        icon: 'fas fa-home',
        link: 'admin-properties'
      },
      {
        name: 'Consultas',
        icon: 'fas fa-message',
        link: 'admin-inbox'
      },
      {
        name: 'Ajustes',
        icon: 'fas fa-cog',
        link: 'admin-preferences'
      }
    ];
  }

  logout() {
    this.AuthSVC.LogOutCurrentUser();
  }
}
