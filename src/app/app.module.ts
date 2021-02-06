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
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';

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
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
