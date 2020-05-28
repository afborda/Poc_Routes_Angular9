import { DvdService } from './../../services/dvd.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Dvd } from 'src/app/models/dvd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss'],
})
export class DvdComponent implements OnInit {
  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService, private router: Router) {}

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$;
  }
  goDetails(i: number, dvd: Dvd) {
    console.log(dvd[i]);
    this.router.navigate([`dvds/${i}`, { title: dvd[i].title }]);
  }
  remove(i: number) {
    this.dvdService.remove(i);
  }
}
