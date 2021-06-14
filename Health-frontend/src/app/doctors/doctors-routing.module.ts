import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/_helpers';

import { DoctorsComponent } from './doctors.component';

const routes: Routes = [{ path: '', component: DoctorsComponent,canActivate : [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule {

}
