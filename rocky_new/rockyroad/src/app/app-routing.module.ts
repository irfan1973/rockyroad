import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { SolutionsComponent } from './solutions/solutions/solutions.component';
import { ServicesComponent } from './services/services/services.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';

const routes: Routes = [
  {path: '', redirectTo:'about-us', pathMatch: 'full' },
  {path: 'about-us', component: AboutusComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact-us', component: ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
