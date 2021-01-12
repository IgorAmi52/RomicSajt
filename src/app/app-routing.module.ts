import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { glavnoComponent } from './glavno/glavno.component';
import { zanrKreatorComponent } from './zanr-kreatoer/zanr-kreatoer.component';

const routes: Routes = [
  { path: '', component: glavnoComponent },
  { path: 'zanrovi', component: zanrKreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRootModule {}
