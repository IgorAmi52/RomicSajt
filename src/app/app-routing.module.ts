import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografijaComponent } from './biografija/biografija.component';
import { glavnoComponent } from './glavno/glavno.component';
import { VrsteComponent } from './vrste/vrste.component';
import { zanrKreatorComponent } from './zanr-kreatoer/zanr-kreatoer.component';

const routes: Routes = [
  { path: '', component: glavnoComponent, data: {animation: 'HomePage'} },
  { path: 'zanrovi', component: zanrKreatorComponent },
  { path: 'aboutme', component: BiografijaComponent, data: {animation: 'AboutPage'} },
  { path: 'mywork', component: VrsteComponent, data: {animation: 'SongListPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRootModule {}
