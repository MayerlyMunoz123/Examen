import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
        routerLink: ['/about']
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/posts']
      }
    ];
  }
}
