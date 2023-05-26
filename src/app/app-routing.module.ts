import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PotsComponent } from './pots/pots.component';
import { WeavingComponent } from './weaving/weaving.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Pots', component: PotsComponent},
  {path: 'Weaving', component: WeavingComponent},
  {path: 'About', component: AboutComponent},
  {path: 'product/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
