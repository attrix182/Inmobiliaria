import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'sb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@HostListener('scroll', ['$event'])
export class NavbarComponent {
  public toggle: boolean = false;
  @Input() searcher: boolean;
  public searchValue: string = '';
  @Output() onSearch: any = new EventEmitter();
  actualSection:string;

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      let doc = document.querySelector('html') as HTMLElement;
      this.actualSection = event.url.replace('/','')
      doc.classList.remove('a-fullscreen');
    });
  }

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
    this.router.navigateByUrl('admin-dashboard');
  }

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToProperties() {
    this.router.navigateByUrl('propiedades');
  }


}
