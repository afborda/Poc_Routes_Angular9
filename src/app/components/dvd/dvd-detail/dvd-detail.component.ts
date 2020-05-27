import { Observable } from 'rxjs';
import { DvdService } from './../../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss'],
})
export class DvdDetailComponent implements OnInit {
  dvd$: Observable<Dvd>;
  title = null;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let index: number = +this.route.snapshot.paramMap.get('index');
    this.dvd$ = this.dvdService.get(index);
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('title')) this.title = params.get('title');
    });

    //this.dvd$ = this.dvdService.get(index)

    // Outra forma de pegar os parametros
    // this.route.paramMap.subscribe((params: ParamMap) =>
    //   console.log('index params >>>', params.get('index'))
    // );
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}
