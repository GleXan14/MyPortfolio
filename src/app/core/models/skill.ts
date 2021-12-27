export interface ISkill{
    type:string;
    name:string;
    icon?:string;
    percent?:number;
    text?:string;
}

export interface IAbility extends ISkill{
    icon:string;
    text:string;
}
export interface ILanguages extends ISkill{
    icon:string;
    percent:number;
}
export interface IDevtools extends ISkill{
    icon:string;
}

// type SkillType = {
//     type:string;
//     name:string;
//     icon?:string;
//     percent?:number;
//     text?:string;
// } & ISkill

export class Skill implements ISkill{
    type:string;
    name:string;
    icon?:string;
    percent?:number;
    text?:string;
}