import { Injectable } from '@angular/core';
import dataProjects from '../data/projects.json';
import dataSkills from '../data/skills.json';
import dataPersonal from '../data/personal.json';
import { Adapter } from '../models/adapter';
import { IContact, ISocial } from '../models/general';
import { IProject, IProjectJson } from '../models/project';
import { ISkill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private projects: IProjectJson[] = dataProjects.projects;
  private skills: ISkill[] = dataSkills.skills;
  private contact: IContact = dataPersonal.contacts;
  private socials: ISocial[] = dataPersonal.socials;

  constructor() { }

  getProjects():IProject[] {
    const adapter = new Adapter();
    return this.projects.map(pro => adapter.adaptProject(pro));
  }

  getSkills():ISkill[] {
    return this.skills;
  }

  getContacts():IContact{
    return this.contact;
  }

  getSocials(): ISocial[]{
    return this.socials;
  }
}
