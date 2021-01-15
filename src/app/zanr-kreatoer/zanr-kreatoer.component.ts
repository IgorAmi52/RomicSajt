import { Component, Input, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ZanroviService } from '../zanrovi.service';
import { Subscription, throwError } from 'rxjs';
import { PesmeService } from '../pesme.service';

@Component({
  selector: 'app-zanrKreator',
  templateUrl: './zanr-kreatoer.component.html',
  styleUrls: ['./zanr-kreatoer.component.css'],
})
export class zanrKreatorComponent implements OnInit {
  slika!: string;
  Zanrovi!: string[];
  Zanr!: string;
  IzabraniZanr!: string;
  Pesma!: File;
  ZanroviSubscriber = new Subscription();
  FileSlika!: File;
  imePesme: string = '';
  constructor(
    private zanroviService: ZanroviService,
    private pesmeService: PesmeService
  ) {}

  ngOnInit() {
    this.ZanroviSubscriber = this.zanroviService
      .VracanjeImenaZanrova()
      .subscribe((ImenaZanrova) => {
        this.Zanrovi = ImenaZanrova;
        console.log(this.Zanrovi);
      });
  }

  saljiSliku(event: any) {
    this.FileSlika = (event.target as HTMLInputElement).files![0];

    var FajlCitac: FileReader = new FileReader();

    FajlCitac.onloadend = () => {
      this.slika = FajlCitac.result as string;
    };
    FajlCitac.readAsDataURL(this.FileSlika);
  }
  saljiPesmu(event: any) {
    this.Pesma = (event.target as HTMLInputElement).files![0];
    console.log(this.Pesma);
  }

  SubmiterZanra() {
    this.zanroviService.SlanjeZanrova(this.Zanr, this.FileSlika);
  }
  SubmiterPesme() {
    if (
      this.IzabraniZanr === '//Zanr za pesmu//' ||
      this.IzabraniZanr == undefined
    ) {
      console.log('nisi izabrao zanr');
      return;
    } else {
      this.pesmeService.postaviPesmu(
        this.IzabraniZanr,
        this.Pesma,
        this.imePesme
      );
    }
  }
}
