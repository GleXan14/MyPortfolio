import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sidenav:MatSidenav;
  isSmallWindow:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    const windowWidth = window.innerWidth;
    this.validateWindowWidth(windowWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const windowWidth = event.target.innerWidth;
    this.validateWindowWidth(windowWidth);
    //console.log(width);
  }

  validateWindowWidth(windowWidth:number){
    if(windowWidth < 800){
      this.isSmallWindow = true;
    }else{
      this.isSmallWindow = false;
    }
  }

}
