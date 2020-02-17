import {Component, OnInit} from '@angular/core';
import {UicontrolService} from '../../service/uicontrol-service/uicontrol.service';

@Component({
  selector: 'app-workingexperience',
  templateUrl: './workingexperience.component.html',
  styleUrls: ['./workingexperience.component.css']
})
export class WorkingexperienceComponent implements OnInit {
  constructor(private ui: UicontrolService) {

  }

  ngOnInit() {
  }

  openAccordion(elementid: string) {
    return this.ui.openAccordion(elementid);
  }
}
