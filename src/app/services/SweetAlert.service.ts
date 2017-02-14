import {Injectable} from '@angular/core';

import {assign} from 'lodash';
let win : any = typeof window !== 'undefined' && window || {};

@Injectable()
export class SweetAlertService{
    sweetalert:any;
    constructor(){
        this.sweetalert = win.Sweetalert2;
    }

    swal(){
        return this.sweetalert(...Array.from(arguments));
    }

    prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return this.sweetalert(assign(baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return this.sweetalert(assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return this.sweetalert(assign(baseOptions, options));
  }

  question(options) {
    return this.alert(assign({ type: 'question' }, options));
  }

  success(options) {
    return this.alert(assign({ type: 'success' }, options));
  }

  error(options) {
    return this.alert(assign({ type: 'error' }, options));
  }

  warn(options) {
    return this.alert(assign({ type: 'warn' }, options));
  }

  info(options) {
    return this.alert(assign({ type: 'info' }, options));
  }
}
