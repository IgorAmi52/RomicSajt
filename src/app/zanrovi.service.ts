import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZanroviService {
  private ZanrData: { ime: string; slika: string }[] = [];
  private ZanrSubject = new Subject<{ ime: string; slika: string }[]>();
  constructor(private http: HttpClient) {}

  SlanjeZanrova(Zanr: string, FileSlika: File) {
    var Forma = new FormData();
    Forma.append('ime', Zanr);
    Forma.append('slika', FileSlika, Zanr);

    this.http
      .post('http://localhost:3000/postaviZanr', Forma)
      .subscribe((res) => {
        console.log(res);
      });
  }

  VracanjeZanrova() {
    this.http
      .get<{ zanrovi: { ime: string; slika: string }[] }>(
        'http://localhost:3000/dobiZanrove'
      )
      .subscribe((Zanrovi) => {
        this.ZanrData = Zanrovi.zanrovi;
        this.ZanrSubject.next([...this.ZanrData]);
      });
  }
  SlusajZanrove() {
    return this.ZanrSubject.asObservable();
  }
}
