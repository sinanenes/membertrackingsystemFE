import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KisilerComponent } from './kisiler/kisiler.component';
import { ShowKisiComponent } from './kisiler/show-kisi/show-kisi.component';
import { AddEditKisiComponent } from './kisiler/add-edit-kisi/add-edit-kisi.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KurslarComponent } from './kurslar/kurslar.component';
import { HeaderComponent } from './header/header.component';
import { AddEditKursComponent } from './kurslar/add-edit-kurs/add-edit-kurs.component';
import { ShowKursComponent } from './kurslar/show-kurs/show-kurs.component';
import { BilgilendirmelerComponent } from './bilgilendirmeler/bilgilendirmeler.component';
import { AddEditBilgilendirmeComponent } from './bilgilendirmeler/add-edit-bilgilendirme/add-edit-bilgilendirme.component';
import { ShowBilgilendirmeComponent } from './bilgilendirmeler/show-bilgilendirme/show-bilgilendirme.component';
import { BorclarComponent } from './borclar/borclar.component';
import { AddEditBorcComponent } from './borclar/add-edit-borc/add-edit-borc.component';
import { ShowBorcComponent } from './borclar/show-borc/show-borc.component';

@NgModule({
  declarations: [
    AppComponent,
    KisilerComponent,
    ShowKisiComponent,
    AddEditKisiComponent,
    LoginComponent,
    DashboardComponent,
    KurslarComponent,
    HeaderComponent,
    AddEditKursComponent,
    ShowKursComponent,
    BilgilendirmelerComponent,
    AddEditBilgilendirmeComponent,
    ShowBilgilendirmeComponent,
    BorclarComponent,
    AddEditBorcComponent,
    ShowBorcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
