import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PopupService} from '../../service/popup-service/popup.service';
import {ApiService} from '../../service/api-service/api.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  public emailvalue: any;
  public objemail: any;
  emailForm = new FormGroup({
    sendername: new FormControl(''),
    senderemail: new FormControl(''),
    emailtitle: new FormControl(''),
    emailmessage: new FormControl('')
  });

  constructor(
    private popupService: PopupService,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.emailvalue = this.emailForm.value;
    this.objemail = {
      sender_name: this.emailvalue.sendername,
      sender_email: this.emailvalue.senderemail,
      email_subject: this.emailvalue.emailtitle,
      email_content: this.emailvalue.emailmessage
    };
    this.SendEmail(this.objemail).subscribe()
    this.emailForm.reset();
  }

  openPopup(id: string) {
    this.popupService.open(id);
  }

  closePopup(id: string) {
    this.popupService.close(id);
  }

  private SendEmail(params) {
    return this.apiService.post('utility/sendemail', this.objemail);
  }
}
