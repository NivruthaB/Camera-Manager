import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: '', redirectTo:'login', pathMatch:'full'},
   {path: 'cameraDetails', component: CameraDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
