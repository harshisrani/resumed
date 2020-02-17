import {Component, OnInit} from '@angular/core';
import {UicontrolService} from '../../service/uicontrol-service/uicontrol.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private ui: UicontrolService) {
  }

  ngOnInit() {
  }

  openAccordion(elementid: string) {
    return this.ui.openAccordion(elementid);
  }
}
