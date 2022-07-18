import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { PokeListRoutingModule } from './poke-list-routing.module';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeTypesPipe } from 'src/app/pipes/poke-types.pipe';
import { PokeSearchPipe } from 'src/app/pipes/poke-search.pipe';


@NgModule({
  declarations: [
    PokeListComponent,
    PokeTypesPipe,
    PokeSearchPipe
  ],
  imports: [
    CommonModule,
    PokeListRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class PokeListModule { }
