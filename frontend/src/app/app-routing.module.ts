import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './component/display/display.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddDataComponent } from './component/add-data/add-data.component';
import { AuthGuardService } from './auth-guard.service';
import { ReferanceComponent } from "./component/reference/referance.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import {ReviewEditComponent} from "./component/review-edit/review-edit.component";
import {SuperAdminService} from "./superAdmin/super-admin.service";
import {DataResolver} from "./component/add-data/data.resolver";

const routes: Routes = [
  //{ path: '/display/data/s', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'display/data', component: DisplayComponent },


  //{ path: '', component: DisplayComponent },
  //{ path: 'admin', component: AdminComponent },
  // { path: 'add/data', component: AddDataComponent, canActivate: [AuthGuardService] },

  { path: "add", component: AddDataComponent, canActivate: [AuthGuardService], resolve: {data: DataResolver}},
  { path: "indicator/:id/edit", component: AddDataComponent, canActivate: [SuperAdminService], data: {target: 'indicator'}, resolve: {data: DataResolver}},
  { path: "reference/:id/edit", component: AddDataComponent, canActivate: [SuperAdminService], data: {target: 'reference'}, resolve: {data: DataResolver}},
  { path: "reference", component: ReferanceComponent },
  { path: "login", component: AdminComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "review/add/:indicatorId", component: ReviewEditComponent, canActivate: [AuthGuardService]},
  { path: "review/:id/edit", component: ReviewEditComponent, canActivate: [AuthGuardService]},
  { path: "", component: DisplayComponent },
  { path: "", redirectTo: "display/data", pathMatch: "full" },

  //{ path: 'display/data', redirectTo: 'https://latool.github.io/', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
