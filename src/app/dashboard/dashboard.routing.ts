import { Routes } from '@angular/router';
import { CategoriaAgregarComponent } from '../categoria/categoria-agregar/categoria-agregar.component';
import { CategoriaEditarComponent } from '../categoria/categoria-editar/categoria-editar.component';
import { CategoriaEliminarComponent } from '../categoria/categoria-eliminar/categoria-eliminar.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { FichaClinicaComponent } from '../ficha-clinica/ficha-clinica.component';
import { SubcategoriaAgregarComponent } from '../subcategoria/subcategoria-agregar/subcategoria-agregar.component';
import { SubcategoriaEditarComponent } from '../subcategoria/subcategoria-editar/subcategoria-editar.component';
import { SubcategoriaEliminarComponent } from '../subcategoria/subcategoria-eliminar/subcategoria-eliminar.component';
import { SubcategoriaComponent } from '../subcategoria/subcategoria.component';
import { CreatePaciente } from '../paciente/createpaciente.component';
import { EditPaciente } from '../paciente/editpaciente.component';
import { PacienteComponent } from '../paciente/paciente.component';

import { DashboardComponent } from './dashboard.component';
import { FichaClinica } from '../model/ficha-clinica';

export const DashboardRoutes: Routes = [
    {
      path: '',
      children: [ 
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'categoria',
          component: CategoriaComponent,
        },
        {
          path: 'nuevacategoria',
          component: CategoriaAgregarComponent,
        },
        {
          path: 'borrarcategoria',
          component: CategoriaEliminarComponent,
        },
        {
          path: 'editarcategoria/:id',
          component: CategoriaEditarComponent,
        },
        {
          path: 'subcategoria',
          component: SubcategoriaComponent,
        },
        {
          path: 'nuevasubcategoria',
          component: SubcategoriaAgregarComponent,
        },
        {
          path: 'editarsubcategoria/:id',
          component: SubcategoriaEditarComponent,
        },
        {
          path: 'borrarsubcategoria',
          component: SubcategoriaEliminarComponent,
        },
        {
          path: 'ficha_clinica',
          component: FichaClinicaComponent,
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'paciente',
          component: PacienteComponent,
        },
        {
          path: 'paciente/create',
          component: CreatePaciente,
        },
        {
          path: 'paciente/edit/:id',
          component: EditPaciente
        }
      ],
  },
];
