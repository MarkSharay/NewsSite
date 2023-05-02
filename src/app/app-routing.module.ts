import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {path:'mainpage', component: MainComponent},
  {path:'newspage', component:NewspageComponent},
  {path:'list', component:ListComponent},
  {path:'', redirectTo:'mainpage',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
