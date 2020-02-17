import { Component, OnInit } from '@angular/core';
import {UicontrolService} from '../../service/uicontrol-service/uicontrol.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
  constructor(private ui: UicontrolService) { }

  ngOnInit() {

  }
  openAccordion(elementid: string) {
    return this.ui.openAccordion(elementid);
  }
}
