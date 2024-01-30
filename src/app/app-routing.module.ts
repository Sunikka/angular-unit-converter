import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConverterUiComponent} from './converter-ui/converter-ui.component'
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: ConverterUiComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
