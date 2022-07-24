import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestroomListComponent } from './restroom-list/restroom-list.component';
import { RootComponent } from './root/root.component';
import { RestroomDetailsComponent } from './restroom-details/restroom-details.component';

const routes: Routes = [
  { path: 'restrooms', component: RestroomListComponent },
  { path: 'restroom/:id', component: RestroomDetailsComponent },
  { path: '', component: RootComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
