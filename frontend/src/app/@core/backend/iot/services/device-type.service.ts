import { Injectable } from '@angular/core';

@Injectable()
export class DeviceTypeService {
  private readonly DEVICE_TYPE_MAP = {
      Light: {
        iconClass: 'nb-lightbulb',
        type: 'primary',
      },
      RollerShades: {
        iconClass: 'nb-roller-shades',
        type: 'success',
      },
      WirelessAudio: {
        iconClass: 'nb-audio',
        type: 'info',
      },
      CoffeeMaker: {
        iconClass: 'nb-coffee-maker',
        type: 'warning',
      },
    };

  getSettings(type: string): any {
    return this.DEVICE_TYPE_MAP[type];
  }
}
