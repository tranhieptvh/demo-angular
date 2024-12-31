import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  success(message: string, titleKey = 'toast.success') {
    const title = this.translate.instant(titleKey);
    this.toastr.success(message, title);
  }

  error(message: string, titleKey = 'toast.error') {
    const title = this.translate.instant(titleKey);
    this.toastr.error(message, title);
  }

  info(message: string, titleKey = 'toast.info') {
    const title = this.translate.instant(titleKey);
    this.toastr.info(message, title);
  }

  warning(message: string, titleKey = 'toast.warning') {
    const title = this.translate.instant(titleKey);
    this.toastr.warning(message, title);
  }
}
