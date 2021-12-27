import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { ISocial } from 'src/app/core/models/general';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  socials: ISocial[];
  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.socials = this.service.getSocials();
  }

}
