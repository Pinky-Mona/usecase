import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components created are imported for routing
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RenewalPageComponent } from './renewal-page/renewal-page.component';
//for different users
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './services/admin.gaurd';
import { NormalGuard } from './services/normal.gaurd';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',pathMatch:'full',component:HomeComponent},
  {path:'login',pathMatch:'full',component:LoginComponent},
  {path:'register',pathMatch:'full',component:RegisterComponent},
  {path:'about us',pathMatch:'full',component:AboutUsComponent},
  {path:'renewPage',pathMatch:'full',component:RenewalPageComponent},
  {path:'userDash',pathMatch:'full',component:UserDashboardComponent},//normal user
  {path:'adminDash',pathMatch:'full',component:AdminDashboardComponent,canActivate:[AdminGuard]},//for admin,normal user cant access this
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
