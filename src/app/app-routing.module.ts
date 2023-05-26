import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PotsComponent } from './pots/pots.component';
import { WeavingComponent } from './weaving/weaving.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path: 'details/:$id', component: ProductDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pots', component: PotsComponent},
  {path: 'weaving', component: WeavingComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
