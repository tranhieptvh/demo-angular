import {ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {icons} from './icons-provider';
import {provideNzIcons} from 'ng-zorro-antd/icon';
import {vi_VN, provideNzI18n} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './translate.loader';
import {provideAnimations} from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideNzIcons(icons),
    provideNzI18n(vi_VN),
    importProvidersFrom(
      FormsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'vi',
      })
    ),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(), // Cần thiết để hỗ trợ hiệu ứng
    provideToastr({
      positionClass: 'toast-bottom-right', // Vị trí thông báo
      timeOut: 1500,                      // Thời gian hiển thị
      closeButton: true,                   // Hiển thị nút đóng
      progressBar: true,                // Hiển thị thanh tiến trình
    }),
  ]
};
