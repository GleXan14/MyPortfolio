import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillUtilService {

  constructor() { }

  getDisplayName(name:string){
    switch(name){
      case 'angular':
        return "Angular";
        
      case 'react':
        return "React";
        
      case 'html':
        return "HTML5";
        
      case 'css':
        return "CSS3";
        
      case 'sass':
        return "Sass"
        
      case 'node':
        return "NodeJs";
        
      case 'javascript':
        return "JavaScript/TypeScript";
        
      case 'front-end':
        return "Front-end Development";
        
      case 'back-end':
        return "Back-end Development";
        
      case 'git':
        return "Git";
        
      case 'github':
        return "GitHub";
        
      case 'bootstrap':
        return "Bootstrap";
        
      case 'terminal':
        return "Terminal";
        
    }
  }
}
