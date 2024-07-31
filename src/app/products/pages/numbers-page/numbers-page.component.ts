import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export class NumbersPageComponent {
  public totalSells: number = 25678888.7852;
  public percent: number = 0.4856;

 }
