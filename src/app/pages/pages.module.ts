import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [PagesComponent,HomeComponent,IndexComponent, UserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule

  ],
  providers:[ ],
  bootstrap:[HomeComponent]
})
export class PagesModule { }
