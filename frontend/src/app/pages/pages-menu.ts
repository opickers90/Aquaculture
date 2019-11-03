import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu = [
      {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
        children: undefined,
      },
    ];

    const menu: NbMenuItem[] = [
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Temperature Air Detail',
        icon: 'layout-outline',
      },
      {
        title: 'pH Meter Detail',
        icon: 'edit-2-outline',
      },
      {
        title: 'DO Meter Detail',
        icon: 'keypad-outline',
      },
      {
        title: 'Salinitas Detail',
        icon: 'browser-outline',
      },
    ];
    const userMenu: NbMenuItem = {
      title: 'Users',
      icon: 'people-outline',
      link: '/pages/users/list',
      children: undefined,
    };
    return this.accessChecker.isGranted('view', 'users')
      .pipe(map(hasAccess => {
        if (hasAccess) {
          return [...dashboardMenu, userMenu, ...menu];
        } else {
          return [...dashboardMenu, ...menu];
        }
      }));
  }
}
