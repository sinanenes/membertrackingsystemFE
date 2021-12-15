import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KisilerComponent } from './kisiler/kisiler.component';
import { KurslarComponent } from './kurslar/kurslar.component';
import { AuthGuard } from './auth/auth.guard';
import { BilgilendirmelerComponent } from './bilgilendirmeler/bilgilendirmeler.component';
import { BorclarComponent } from './borclar/borclar.component';
import { IzinlerComponent } from './izinler/izinler.component';
import { KasabankalarComponent } from './kasabankalar/kasabankalar.component';
import { KodlarComponent } from './kodlar/kodlar.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { KurskayituyelerComponent } from './kurskayituyeler/kurskayituyeler.component';
import { OdemelerComponent } from './odemeler/odemeler.component';
import { SorularComponent } from './sorular/sorular.component';
import { TahsilatlarComponent } from './tahsilatlar/tahsilatlar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kisiler', component: KisilerComponent },
  { path: 'kurslar', component: KurslarComponent },
  { path: 'bilgilendirmeler', component: BilgilendirmelerComponent},
  { path: 'borclar', component: BorclarComponent },
  { path: 'izinler', component: IzinlerComponent },
  { path: 'kasabankalar', component: KasabankalarComponent},
  { path: 'kodlar', component: KodlarComponent },
  { path: 'kullanicilar', component: KullanicilarComponent },
  { path: 'kurskayituyeler', component: KurskayituyelerComponent },
  { path: 'odemeler', component: OdemelerComponent},
  { path: 'sorular', component: SorularComponent},
  { path: 'tahsilatlar', component: TahsilatlarComponent}

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginComponent,DashboardComponent,KisilerComponent,KurslarComponent]