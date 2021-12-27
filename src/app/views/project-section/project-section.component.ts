import { ISkill } from './../../core/models/skill';
import { SkillUtilService } from './../../core/services/skill-util.service';
import { MainService } from './../../core/services/main.service';
import { IProject } from './../../core/models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  projects: IProject[];
  skills: ISkill[];
  constructor(
    private service: MainService,
    public utils: SkillUtilService) { }

  ngOnInit(): void {
    this.projects = this.service.getProjects();
    this.skills = this.service.getSkills();
  }

  getIcon(name:string):string{
    const skill = this.skills.find(item => item.name === name);

    return skill ? skill.icon : '';
  }

}
