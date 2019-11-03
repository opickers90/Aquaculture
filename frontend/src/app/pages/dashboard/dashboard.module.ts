/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './dashboard.component/status-card/status-card.component';
import { ContactsComponent } from './dashboard.component/contacts/contacts.component';
import { RoomsComponent } from './dashboard.component/rooms/rooms.component';
import { RoomSelectorComponent } from './dashboard.component/rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './dashboard.component/kitten/kitten.component';
import { SecurityCamerasComponent } from './dashboard.component/security-cameras/security-cameras.component';
import { ElectricityComponent } from './dashboard.component/electricity/electricity.component';
import { ElectricityChartComponent } from './dashboard.component/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './dashboard.component/weather/weather.component';
import { SolarComponent } from './dashboard.component/solar/solar.component';
import { PlayerComponent } from './dashboard.component/rooms/player/player.component';
import { TrafficComponent } from './dashboard.component/traffic/traffic.component';
import { TrafficChartComponent } from './dashboard.component/traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { StatusCardPlaceholderComponent } from './dashboard.component/status-card/status-card-placeholder.component';
import { AuthModule } from '../../@auth/auth.module';
import {PhComponent} from './ph/ph.component';
import {DoDraggerComponent} from './do/do-dragger/do-dragger.component';
import {DoComponent} from "./do/do.component";
import {PhDraggerComponent} from "./ph/ph-dragger/ph-dragger.component";
import {SalinityComponent} from "./salinitas/salinity.component";
import {SalinityDraggedComponent} from "./salinitas/do-dragger/salinity-dragged.component";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NgxEchartsModule,
    AuthModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    StatusCardPlaceholderComponent,
    PhComponent,
    PhDraggerComponent,
    DoComponent,
    PhDraggerComponent,
    DoDraggerComponent,
    SalinityComponent,
    SalinityDraggedComponent,
  ],
})
export class DashboardModule { }
