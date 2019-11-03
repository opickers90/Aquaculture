import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolarData, SolarEnergyStatistics } from '../../../interfaces/iot/solar';
import { EnergyAggregatedApi } from '../api/energy-aggregated.api';

@Injectable()
export class SolarService extends SolarData {

  constructor(private api: EnergyAggregatedApi) {
    super();
  }

  getSolarData(): Observable<SolarEnergyStatistics> {
    return this.api.getSolar();
  }
}
