import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {RouterLink, RouterOutlet} from "@angular/router";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {en_US, NzI18nService, vi_VN} from 'ng-zorro-antd/i18n';
import {ToastService} from '../../services/toast/toast.service';
import {NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterLink,
    RouterOutlet,
    NzDropdownMenuComponent,
    TranslatePipe,
    NzDropDownModule,
    NzIconModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isCollapsed = false;
  currentLanguage = 'vi';

  constructor(
    private translate: TranslateService,
    private nzI18n: NzI18nService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('lang') || 'vi';
    this.currentLanguage = savedLanguage;

    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang); // Đổi ngôn ngữ của ngx-translate
    this.nzI18n.setLocale(lang === 'en' ? en_US : vi_VN); // Đồng bộ Ant Design
    localStorage.setItem('lang', lang);

    this.toast.success('change lang success!')
    this.toast.error('change lang error!')
    this.toast.info('change lang info!')
    this.toast.warning('change lang warning!')
  }
}
