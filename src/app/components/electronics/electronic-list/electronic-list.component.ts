import { ElectronicService } from './../../../services/electronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Electronic } from 'src/app/models/electronic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.scss'],
})
export class ElectronicListComponent implements OnInit {
  electronics$: Observable<Electronic[]>;

  constructor(
    private electronicService: ElectronicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.electronics$ = this.electronicService.electronic$;
  }

  goDetails(i: number, electronic: Electronic) {
    console.log(electronic[i]);
    this.router.navigate([`dvds/${i}`, { title: electronic[i].title }]);
  }
  remove(i: number) {
    this.electronicService.remove(i);
  }
}
