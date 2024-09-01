import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { SortByPipe } from "../../pipes/sort-by.pipe";

@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    ToggleCasePipe,
    ButtonModule,
    ToolbarModule,
    TableModule,

    CanFlyPipe,
    SortByPipe
],
  templateUrl: './order.component.html',
  styles: `

  `,
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void{
    this.orderBy = value;
  }
}
