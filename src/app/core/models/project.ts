export interface IProjectJson{
    name_es:string;
    name_en:string;
    type:string;
    url_image:string;
    url_live:string;
    url_github:string;
    techs:string[];
}

export interface IProject{
    esName:string;
    enName:string;
    type:string;
    imageUrl:string;
    liveUrl:string;
    githubUrl:string;
    techs:string[];
}

export class Project implements IProject{
    esName:string = "";
    enName:string = "";
    type:string = "";
    imageUrl:string = "";
    liveUrl:string = "";
    githubUrl:string = "";
    techs:string[] = [];
}