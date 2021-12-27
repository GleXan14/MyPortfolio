import { SkillUtilService } from './../../core/services/skill-util.service';
import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { IAbility, IDevtools, ILanguages, ISkill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {

  abilities: IAbility[];
  devtools: IDevtools[];
  languages: ILanguages[];

  constructor(
    private service: MainService,
    private skillUtils: SkillUtilService) { }

  ngOnInit(): void {
    const allSkills:ISkill[] = this.service.getSkills();
    this.separateSkills(allSkills);
  }

  separateSkills(data:ISkill[]):void{
    const abilities:any = data.filter(item => item.type === 'ability');
    const devtools:any = data.filter(item => item.type === 'devtools');
    const languages:any = data.filter(item => item.type !== 'ability' && item.type !== 'devtools');

    this.abilities = abilities;
    this.devtools = devtools;
    this.languages = languages;

  }

  getDisplayName(name:string){
    return this.skillUtils.getDisplayName(name);
  }

}
