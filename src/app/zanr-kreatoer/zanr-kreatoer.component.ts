import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ZanroviService } from '../zanrovi.service';

@Component({
  selector: 'app-zanrKreator',
  templateUrl: './zanr-kreatoer.component.html',
  styleUrls: ['./zanr-kreatoer.component.css'],
})
export class zanrKreatorComponent {
  slika!: string;

  Zanr!: string;

  FileSlika!: File;
  constructor(
    private http: HttpClient,
    private zanroviService: ZanroviService
  ) {}

  saljiSliku(event: any) {
    this.FileSlika = (event.target as HTMLInputElement).files![0];

    var FajlCitac: FileReader = new FileReader();

    FajlCitac.onloadend = () => {
      this.slika = FajlCitac.result as string;
    };
    FajlCitac.readAsDataURL(this.FileSlika);
  }

  Submiter() {
    this.zanroviService.SlanjeZanrova(this.Zanr, this.FileSlika);
  }
}
