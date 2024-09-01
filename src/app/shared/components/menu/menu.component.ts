import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] | undefined;

  constructor () {}

  ngOnInit() {
    this.menuItems = [
      {label: 'Pipes de Angular', icon: 'pi pi-desktop', items: [
        {label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/'},
        {label: 'Números', icon: 'pi pi-dollar', routerLink: '/numbers'},
        {label: 'No comunes', icon: 'pi pi-globe', routerLink: '/uncommon'}
      ]},
      {label: 'Pipes personalizados', icon: 'pi pi-cog', items: [
        {label: 'Otro elemento', icon: 'pi pi-cog', routerLink: '/custom'}
      ]}
    ]
  }
}
