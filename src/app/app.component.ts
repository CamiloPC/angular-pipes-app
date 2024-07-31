import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './shared/components/menu/menu.component';

//Configuración del locale de la app
import localeEsCU from '@angular/common/locales/es-CU';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsCU );
registerLocaleData( localeFrCA );

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MenuComponent,
    //BrowserModule,
    //BrowserAnimationsModule,

    ButtonModule
  ],
  providers: [
    //Para el idioma global
    { provide: LOCALE_ID, useValue: 'es-CU' }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title = 'cAmiLO PujOl';

  constructor(private primengConfig: PrimeNGConfig) {};

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

