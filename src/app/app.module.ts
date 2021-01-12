import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BiografijaComponent } from './biografija/biografija.component';
import { SlikeComponent } from './slike/slike.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VrsteComponent } from './vrste/vrste.component';
import { FuterComponent } from './futer/futer.component';
import { zanrKreatorComponent } from './zanr-kreatoer/zanr-kreatoer.component';
import { glavnoComponent } from './glavno/glavno.component';
import { MatCardModule } from '@angular/material/card';
import { AppRootModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,

    BiografijaComponent,
    SlikeComponent,
    VrsteComponent,
    FuterComponent,
    zanrKreatorComponent,
    glavnoComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    AppRootModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
