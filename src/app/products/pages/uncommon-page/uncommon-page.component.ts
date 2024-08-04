import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name: string = 'Juan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'

  };

  changeClient():void {
    this.name = 'Miriam';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Pedro','Fernando','Ana', 'Luisa', 'Cris', 'Carlos'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.',

  }

  deleteClient():void {
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'Juan',
    age: '33',
    address: 'Alicante, España'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  }

  )

}
