import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
    //I18N Select
    public name: string = 'Daniel';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    };
    public changeClient(): void {
        this.name = 'Melissa';
        this.gender = 'female';
    }

    //i18plural
    public clients: string[] = [
        'Maria',
        'Pedro',
        'Fernando',
        'Hernando',
        'Eduardo'
    ];
    public clientsMap = {
        '=0': 'no tenemos ningun cliente esperando',
        '=1': 'tenemos un cliente esperando',
        '=2': 'tenemos 2 clientes esperando',
        other: 'tenemos # clientes esperando'
    };

    public deleteClient(): void {
        this.clients.shift();
        console.log(this.clients);
    }

    //KeyValue

    public person = {
        name: 'Daniel',
        age: 36,
        address: 'Ottawa, Canada'
    };

    //Async pipe

    public myObservableTimer: Observable<number> = interval(2000).pipe(
        tap((value) => console.log('tap:', value))
    );

    public promiseValue = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tenemos data en la promesa.');
        }, 3500);
    });
}
