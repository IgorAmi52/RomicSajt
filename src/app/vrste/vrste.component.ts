import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PesmeService } from '../pesme.service';
import { ZanroviService } from '../zanrovi.service';

@Component({
  selector: 'app-vrste',
  templateUrl: './vrste.component.html',
  styleUrls: ['./vrste.component.css'],
})
export class VrsteComponent implements OnInit {
  Vrste: { ime: string; slika: string }[] = [];
  Pesme: { put: string; zanr: string; ime: string }[] = [];
  SubskrajberZanrova = new Subscription();
  SubskrajberPesama = new Subscription();

  constructor(
    private http: HttpClient,
    private zanroviService: ZanroviService,
    private pesmeService: PesmeService
  ) {}

  ngOnInit() {
    this.zanroviService.VracanjeZanrova();
    this.SubskrajberZanrova = this.zanroviService
      .SlusajZanrove()
      .subscribe((zanrovi) => {
        this.Vrste = zanrovi;
      });
    this.pesmeService.dobiPesme();
    this.SubskrajberPesama = this.pesmeService
      .VratiPesme()
      .subscribe((PoslatePesme) => {
        this.Pesme = PoslatePesme;
        console.log(this.Pesme);
      });
  }
}
