import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@HostListener('scroll', ['$event'])
export class NavbarComponent implements OnInit {
  public toggle: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onWindowScroll(event: any) {
    let element = document.querySelector('.navbar') as HTMLElement;
    let scrollTop = event.srcElement.children[0].scrollTop;

    if (scrollTop > 0) {
      element.classList.add('nav-sticky');
    } else {
      element.classList.remove('nav-sticky');
    }
  }

  toggleNavbar() {
    let element = document.querySelector('.navbar-toggler') as HTMLElement;
    let element2 = document.querySelector('.navCol') as HTMLElement;

    if (!this.toggle) {
      element.classList.add('collapsed');
      element2.classList.add('show');
      this.toggle = true;
    } else {
      element.classList.remove('collapsed');
      element2.classList.remove('show');
      this.toggle = false;
    }
  }

  desplegarSubmenu() {
    let menu = document.querySelector('.dropdown-menu');
    let submenu = document.querySelector('.dropdown-submenu');

    menu.classList.add('show');
    submenu.classList.add('show');
  }

  cerrarSubmenu() {
    let menu = document.querySelector('.dropdown-menu');
    let submenu = document.querySelector('.dropdown-submenu');

    menu.classList.remove('show');
    submenu.classList.remove('show');
  }

  signIn() {
    this.router.navigateByUrl('admin');
  }

  goToHome() {
    this.router.navigateByUrl('home');
  }

  goToProperties() {
    this.router.navigateByUrl('propiedades');
  }
}
