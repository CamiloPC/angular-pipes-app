import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'camilo';
  public nameUpperCase: string = 'CAMILO';
  public fullName: string = 'cAMilO puJOL';

  public customDate: Date = new Date();

}
