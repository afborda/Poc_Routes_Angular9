import { map, delay } from 'rxjs/operators';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Electronic } from '../models/electronic';

@Injectable({
  providedIn: 'root',
})
export class ElectronicService {
  private electronicsSubject$: BehaviorSubject<
    Electronic[]
  > = new BehaviorSubject<Electronic[]>([]);
  public electronic$ = this.electronicsSubject$.asObservable();

  constructor() {
    timer(1000).subscribe(() => {
      this.electronicsSubject$.next([
        {
          name: 'Redmi1',
          brand: 'Xaiomi',
          price: 580,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi2',
          brand: 'Xaiomi',
          price: 780,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi2 1S',
          brand: 'Redmi',
          price: 880,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi C2',
          brand: 'Dos Guri',
          price: 980,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi C6',
          brand: 'Xaiomi',
          price: 1080,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi A1',
          brand: 'Xaiomi',
          price: 1180,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi B7',
          brand: 'Xaiomi',
          price: 580,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
        {
          name: 'Redmi 9',
          brand: 'Xaiomi',
          price: 1380,
          description:
            'O Xiaomi Redmi 1S é um dispositivo estelar para quem quer comprar um smartphone com um orçamento apertado. Este telefone funciona melhor que o sempre confiável Motorola Moto E e também possui uma câmera melhor. O único problema é comprar um, pois ele só está disponível através de um modelo de venda instantânea no Flipkart.',
        },
      ]);
    });
  }

  add(electronic: Electronic) {
    this.electronicsSubject$.getValue().push(electronic);
  }

  remove(i: number) {
    let electronic = this.electronicsSubject$.getValue();
    if (i >= 0 && i < electronic.length) {
      electronic.splice(i, 1);
    }
  }

  get(i: number): Observable<Electronic> {
    return this.electronic$.pipe(
      map(
        (electro) => (i >= 0 && i < electro.length ? electro[i] : null),
        delay(1000)
      )
    );
  }
}
