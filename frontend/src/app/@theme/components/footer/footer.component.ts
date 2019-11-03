import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Lembaga Pengembangan Inovasi dan Kewirausahaan <b>
      <a href="http://lpik.itb.ac.id/" target="_blank">LPIK</a></b> {{ currentYear }}</span>
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
