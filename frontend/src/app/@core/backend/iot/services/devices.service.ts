import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Device, DevicesData } from '../../../interfaces/iot/devices';
import { DevicesApi } from '../api/devices.api';
import { DeviceTypeService } from './device-type.service';

@Injectable()
export class DevicesService extends DevicesData {

  constructor(private api: DevicesApi, private settings: DeviceTypeService) {
    super();
  }

  list(): Observable<Device[]> {
    return this.api.list()
      .pipe(map(data => data.map(item => {
        return {
          ...item,
          settings: this.settings.getSettings(item.type),
        };
      })));
  }

  edit(device: Device): Observable<Device> {
    return this.api.edit(device)
      .pipe(map(item => {
        return {
          ...item,
          settings: this.settings.getSettings(item.type),
        };
      }));
  }
}
