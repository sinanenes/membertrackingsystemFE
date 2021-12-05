import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KisilerComponent } from './kisiler/kisiler.component';
import { KurslarComponent } from './kurslar/kurslar.component';
import { AuthGuard } from './auth/auth.guard';
import { BilgilendirmelerComponent } from './bilgilendirmeler/bilgilendirmeler.component';
import { BorclarComponent } from './borclar/borclar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path:'kisiler',component:KisilerComponent },
  { path: 'kurslar', component: KurslarComponent },
  {path: 'bilgilendirmeler',component:BilgilendirmelerComponent},
  { path: 'borclar', component: BorclarComponent }

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginComponent,DashboardComponent,KisilerComponent,KurslarComponent]