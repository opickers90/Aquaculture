import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../../@theme/theme.module';
import { UsersRoutingModule } from './users-routing.module';
import { AuthModule } from '../../../@auth/auth.module';

// pages.components
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ComponentsModule } from '../../../@components/components.module';
// pages.components

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
} from '@nebular/theme';

const  NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbInputModule,
];

@NgModule({
  imports: [
    ThemeModule,
    AuthModule,
    Ng2SmartTableModule,
    UsersRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ...NB_MODULES,
  ],
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserComponent,
  ],
  entryComponents: [
  ],
  providers: [],
})
export class UsersModule { }
