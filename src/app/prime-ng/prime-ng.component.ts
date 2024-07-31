import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-prime-ng',
  template:'',
  standalone: true,
  imports: [
    MenubarModule,
    PanelModule,
    CardModule,
    FieldsetModule,
    ButtonModule
  ],
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PrimeNgComponent { }
