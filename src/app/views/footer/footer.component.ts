import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { ISocial } from 'src/app/core/models/general';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email:string = '';
  phoneNumber:string = '';
  socials: ISocial[];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    const contacts = this.service.getContacts();
    this.email = contacts.email;
    this.phoneNumber = contacts.phoneNumber;
    this.socials = this.service.getSocials();

  }

}
