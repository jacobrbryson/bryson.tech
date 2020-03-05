import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from './token';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private baseURL = 'https://api.bryson.tech/contact'
  name:     string;
  email:    string;
  message:  string;
  token:    Token;
  data: string;
  public email_sent = false;

  getToken(): void {
    this.contactService.getToken()
    .subscribe(token => this.token = token);
  }

  constructor(
    private contactService: ContactService,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.getToken();
    //console.log(this.contact);
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    //Do some fancy lock out inputs, maybe a loader...
    this.http.post<any>(this.baseURL, JSON.stringify({
      name: this.name,
      email: this.email,
      message: this.message,
      token: this.token
    }), {headers:{'Content-Type': 'application/json; charset=utf-8'}}).subscribe(data => {
      this.data = data;
      //console.log(data);

    });
    this.email_sent = true;
  }
}
  