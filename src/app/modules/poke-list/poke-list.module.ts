import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeListRoutingModule } from './poke-list-routing.module';
import { PokeListComponent } from './components/poke-list/poke-list.component';


@NgModule({
  declarations: [
    PokeListComponent
  ],
  imports: [
    CommonModule,
    PokeListRoutingModule
  ]
})
export class PokeListModule { }
