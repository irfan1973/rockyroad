import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { SolutionsComponent } from './solutions/solutions/solutions.component';
import { ServicesComponent } from './services/services/services.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { FooterComponent } from './footer/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutusComponent,
    SolutionsComponent,
    ServicesComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
