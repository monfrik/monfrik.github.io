import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 0, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 1, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 2, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 3, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 4, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 5, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 6, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 7, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 8, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 9, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 10, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 11, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 12, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 13, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 14, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 15, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
      { id: 16, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000 },
    ];
    const wishes = [
      { id: 1, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000, dateOfAdoption: '6 декабря 2019 г.' },
      { id: 2, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000, dateOfAdoption: '6 декабря 2019 г.' },
    ];
    const shopcart = [
      { id: 1, name: 'Dr Nice', img:'assets/img/phone.png', price: 3000000, dateOfAdoption: '6 декабря 2019 г.', count: 2  }
    ];

    return {products, wishes, shopcart};
  }
}