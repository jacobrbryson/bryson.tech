import { Component } from '@angular/core';
import { ContactService, Contact } from 'src/app/services/contact.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = environment.email;

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
  