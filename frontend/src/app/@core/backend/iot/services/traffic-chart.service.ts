import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrafficChartData } from '../../../interfaces/iot/traffic-chart';
import { TrafficAggregatedApi } from '../api/traffic-aggregated.api';

@Injectable()
export class TrafficChartService extends TrafficChartData {

  constructor(private api: TrafficAggregatedApi) {
    super();
  }

  getTrafficChartData(period: string): Observable<number[]> {
    return this.api.getTraffic(period)
      .pipe(map(data => data.lines[0].values));
  }
}
