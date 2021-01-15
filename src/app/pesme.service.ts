import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PesmeService {
  Pesme: { put: string; zanr: string; ime: string }[] = [];
  PesmeSubjekat = new Subject<{ put: string; zanr: string; ime: string }[]>();
  constructor(private http: HttpClient) {}

  postaviPesmu(zanr: string, pesma: File, ime: string) {
    const PesmaForm = new FormData();
    PesmaForm.append('zanr', zanr);
    PesmaForm.append('pesma', pesma, pesma.name);
    PesmaForm.append('ime', ime);
    this.http
      .post('http://localhost:3000/postaviPesmu', PesmaForm)
      .subscribe((res) => {});
  }

  dobiPesme() {
    this.http
      .get<{ pesme: { put: string; zanr: string; ime: string }[] }>(
        'http://localhost:3000/dobiPesmu'
      )
      .subscribe((pesme) => {
        this.Pesme = pesme.pesme;
        this.PesmeSubjekat.next([...this.Pesme]);
      });
  }
  VratiPesme() {
    return this.PesmeSubjekat.asObservable();
  }
}
