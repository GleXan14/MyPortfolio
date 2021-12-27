import { IProject, IProjectJson, Project } from "./project";

export class Adapter {

    public adaptProject(res:IProjectJson): IProject{
        const project = new Project();
        project.enName = res.name_en;
        project.esName = res.name_es;
        project.type = res.type;
        project.imageUrl = res.url_image;
        project.liveUrl = res.url_live;
        project.githubUrl = res.url_github;
        project.techs = res.techs;

        return project;
    }
}
