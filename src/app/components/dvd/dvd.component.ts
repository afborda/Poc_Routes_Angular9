import { DvdService } from './../../services/dvd.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss'],
})
export class DvdComponent implements OnInit {
  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService) {}

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$;
  }
}
