import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UicontrolService {

  constructor() { }

  openAccordion(elementid: string) {
    const job = document.getElementById(elementid);
    if (job.className.indexOf('w3-show') === -1) {
      job.className += ' w3-show';
    } else {
      job.className = job.className.replace(' w3-show', '');
    }
  }
}
