import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {path:"",component:PagesComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:"index",component:IndexComponent},
    {path:"user",component:UserComponent},
    {path:"editor",component:EditorComponent},
  ]},
  {path:"",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
