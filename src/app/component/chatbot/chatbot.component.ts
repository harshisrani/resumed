import {Component, OnInit} from '@angular/core';
import {Message} from './messages';
import {FormControl, FormGroup} from '@angular/forms';
import {formatDate} from '@angular/common';
import {ReadjsonfileService} from '../../service/readjsonfile-service/readjsonfile.service';
import {ApiService} from '../../service/api-service/api.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['../../style/chatbot.css']
})
export class ChatbotComponent implements OnInit {
  broswercurrentlanguage: any;
  params: any;
  tempdisabled = false;
  strhr: string;
  inthr: number;
  guestname: string;
  hidechatbot = true;
  messagefromlex: string;
  userInput = '';
  userid: string;
  messages: Message[] = [];
  lexState: string;
  guestnameformvalue: any;
  guestNameForm = new FormGroup({
    guestname: new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private config: ReadjsonfileService) {
  }

  ngOnInit() {

  }

  startconversation() {
    this.broswercurrentlanguage = sessionStorage.getItem('language');
    this.guestnameformvalue = this.guestNameForm.value;
    this.guestname = this.guestnameformvalue.guestname;
    this.userid = this.randomString();
    this.lexState = this.firstgreeting(this.broswercurrentlanguage, this.guestname);
    this.messages.push(new Message(this.lexState, 'Cavour', formatDate(Date.now(), 'HH:mm:ss ', 'en', '+0800').toString(), 'received'));
    this.hidechatbot = false;
  }

  postLexText() {
    try {
      // tslint:disable-next-line:max-line-length
      if (this.userInput.trim().length == 0) {
        return;
      }
      this.messages.push(new Message(this.userInput, this.guestname, formatDate(Date.now(), 'HH:mm:ss ', 'en', '+0800').toString(), 'sent'));
      this.tempdisabled = true;
      this.params = {
        botName: environment.botName,
        botAlias: environment.botAlias,
        inputText: this.userInput,
        userId: this.userid
      };
      this.PostTextToLex(this.params).subscribe(data => {
        this.messagefromlex = data.body.message;
        this.messages.push(new Message(this.messagefromlex, 'Cavour', formatDate(Date.now(), 'HH:mm:ss ', 'en', '+0800').toString(), 'received'));
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.userInput = '';
      this.tempdisabled = false;
    }
  }

  PostTextToLex(params) {
    return this.apiService.post('chatbot/posttexttolex', params);
  }

  private randomString() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    for (let i = 0; i < 16; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private firstgreeting(language, guestname) {
    this.strhr = formatDate(Date.now(), 'HH', 'en', '+0800').toString();
    // tslint:disable-next-line:radix
    this.inthr = parseInt(this.strhr);
    if (language === 'zh') {
      if (this.inthr >= 0 && this.inthr <= 11) {
        return this.guestname + '早晨!很高興可以在這個早上跟你交談。';
      }
      if (this.inthr > 11 && this.inthr <= 17) {
        return this.guestname + '午安!很高興可以在這個下午跟你交談。';
      }
      return this.guestname + '晚安!很高興可以在這個晚上跟你交談。';
    } else {
      if (this.inthr >= 0 && this.inthr <= 11) {
        return 'Good morning ' + this.guestname + '! It is nice to talk with you in this morning.';
      }
      if (this.inthr > 11 && this.inthr <= 17) {
        return 'Good afternoon ' + this.guestname + '! It is nice to talk with you in this afternoon.';
      }
      return 'Good evening! ' + this.guestname + '! It is nice to talk with you in this evening.';
    }
  }
}
