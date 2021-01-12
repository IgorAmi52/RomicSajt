import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZanroviService } from '../zanrovi.service';

@Component({
  selector: 'app-vrste',
  templateUrl: './vrste.component.html',
  styleUrls: ['./vrste.component.css'],
})
export class VrsteComponent implements OnInit {
  Vrste: { ime: string; slika: string }[] = [];
  Subskrajber = new Subscription();

  constructor(
    private http: HttpClient,
    private zanroviService: ZanroviService
  ) {}

  ngOnInit() {
    this.zanroviService.VracanjeZanrova();
    this.Subskrajber = this.zanroviService
      .SlusajZanrove()
      .subscribe((zanrovi) => {
        this.Vrste = zanrovi;
      });
  }
}
