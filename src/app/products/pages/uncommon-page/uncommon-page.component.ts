import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    FieldsetModule,
    ButtonModule
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Camilo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if(this.gender === 'male'){
      this.name = 'Melissa';
      this.gender = 'female';
    }
    else{
      this.name = 'Camilo';
      this.gender = 'male';
    }
  }

  //i18n Plural
  public clients: string[] = ['Camilo', 'Kevyn', 'Raúl', 'Alejandro', 'Luis Carlos'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue
  public person = {
    name: 'Camilo',
    age: 24,
    address: 'Playa, La Habana'
  }

  //Async
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa')
    }, 3500)
  });

 }
