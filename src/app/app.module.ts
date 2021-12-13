import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KisilerComponent } from './kisiler/kisiler.component';
import { ShowKisiComponent } from './kisiler/show-kisi/show-kisi.component';
import { AddEditKisiComponent } from './kisiler/add-edit-kisi/add-edit-kisi.component';
import { SharedService } from './shared.service';

import { HttpClientModule} from '@angular/common/http';
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
import { IzinlerComponent } from './izinler/izinler.component';
import { ShowIzinComponent } from './izinler/show-izin/show-izin.component';
import { AddEditIzinComponent } from './izinler/add-edit-izin/add-edit-izin.component';
import { KasabankalarComponent } from './kasabankalar/kasabankalar.component';
import { ShowKasabankaComponent } from './kasabankalar/show-kasabanka/show-kasabanka.component';
import { AddEditKasabankaComponent } from './kasabankalar/add-edit-kasabanka/add-edit-kasabanka.component';
import { KodlarComponent } from './kodlar/kodlar.component';
import { AddEditKodComponent } from './kodlar/add-edit-kod/add-edit-kod.component';
import { ShowKodComponent } from './kodlar/show-kod/show-kod.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { AddEditKullaniciComponent } from './kullanicilar/add-edit-kullanici/add-edit-kullanici.component';
import { ShowKullaniciComponent } from './kullanicilar/show-kullanici/show-kullanici.component';
import { KurskayituyelerComponent } from './kurskayituyeler/kurskayituyeler.component';
import { ShowKurskayituyeComponent } from './kurskayituyeler/show-kurskayituye/show-kurskayituye.component';
import { AddEditKurskayituyeComponent } from './kurskayituyeler/add-edit-kurskayituye/add-edit-kurskayituye.component';
import { OdemelerComponent } from './odemeler/odemeler.component';
import { ShowOdemeComponent } from './odemeler/show-odeme/show-odeme.component';
import { AddEditOdemeComponent } from './odemeler/add-edit-odeme/add-edit-odeme.component';
import { SorularComponent } from './sorular/sorular.component';
import { AddEditSoruComponent } from './sorular/add-edit-soru/add-edit-soru.component';
import { ShowSoruComponent } from './sorular/show-soru/show-soru.component';
import { TahsilatlarComponent } from './tahsilatlar/tahsilatlar.component';
import { AddEditTahsilatComponent } from './tahsilatlar/add-edit-tahsilat/add-edit-tahsilat.component';
import { ShowTahsilatComponent } from './tahsilatlar/show-tahsilat/show-tahsilat.component';

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
    ShowBorcComponent,
    IzinlerComponent,
    ShowIzinComponent,
    AddEditIzinComponent,
    KasabankalarComponent,
    ShowKasabankaComponent,
    AddEditKasabankaComponent,
    KodlarComponent,
    AddEditKodComponent,
    ShowKodComponent,
    KullanicilarComponent,
    AddEditKullaniciComponent,
    ShowKullaniciComponent,
    KurskayituyelerComponent,
    ShowKurskayituyeComponent,
    AddEditKurskayituyeComponent,
    OdemelerComponent,
    ShowOdemeComponent,
    AddEditOdemeComponent,
    SorularComponent,
    AddEditSoruComponent,
    ShowSoruComponent,
    TahsilatlarComponent,
    AddEditTahsilatComponent,
    ShowTahsilatComponent
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
