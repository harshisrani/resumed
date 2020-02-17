import {Component, OnInit} from '@angular/core';
import {UicontrolService} from '../../service/uicontrol-service/uicontrol.service';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  w3colors = ['w3-green w3-hover-purple', 'w3-blue w3-hover-teal', 'w3-purple w3-hover-green', 'w3-teal w3-hover-blue'];
  w3color1 = this.w3colors[Math.floor(Math.random() * this.w3colors.length)];
  w3color2 = this.w3colors[Math.floor(Math.random() * this.w3colors.length)];

  constructor(private ui: UicontrolService) {
  }

  ngOnInit() {
  }

  openAccordion(elementid: string) {
    return this.ui.openAccordion(elementid);
  }
}

