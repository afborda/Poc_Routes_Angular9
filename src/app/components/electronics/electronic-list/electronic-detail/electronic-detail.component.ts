import { ElectronicService } from './../../../../services/electronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.scss'],
})
export class ElectronicDetailComponent implements OnInit {
  electronicSubject$: Observable<Electronic>;
  title = null;

  constructor(
    private router: Router,
    private electronicService: ElectronicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let i: number = +this.route.snapshot.paramMap.get('index');
    this.electronicSubject$ = this.electronicService.get(i);
  }

  goBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
