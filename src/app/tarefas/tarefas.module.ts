import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

import { 
  TarefaService
} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule 
  ],
  declarations: [
  	ListarTarefaComponent,
  	CadastrarTarefaComponent,
  	EditarTarefaComponent
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
