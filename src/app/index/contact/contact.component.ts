import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from 'src/app/services/contact.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = {
    name: '',
    email: '',
    message: '',
    token: ''
  }
  emailSent: boolean  = false;
  error: boolean = false;

  constructor(
    private contactService: ContactService,
    private recaptchaV3Service: ReCaptchaV3Service
    ) {}

  ngOnInit(): void {
    
  }

  processForm() {
    this.recaptchaV3Service.execute('genToken').subscribe(token => {
      if(token){
        this.contact.token = token;
        if(
          this.contact.token != '' && 
          this.contact.name.trim() != '' && 
          this.contact.email.trim() != '' && 
          this.contact.message.trim() != ''){
            console.log("Validated");
            this.contactService.addContact(this.contact).subscribe(contact => {
              if(contact){
                this.emailSent = true;
              }else{
                this.error = true;
              }
            });
          }
      }
      
    });
  }
}
  