module ngApp.projects {
  "use strict";

  import IProjectsService = ngApp.projects.services.IProjectsService;
  import IProject = ngApp.projects.models.IProject;

  /* ngInject */
  function projectsConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider.state("projects", {
      url: "/projects",
      controller: "ProjectsController as prsc",
      templateUrl: "projects/templates/projects.html",
      resolve: {
        projects: (ProjectsService: IProjectsService) => {
          return ProjectsService.getProjects();
        }
      }
    });

    $stateProvider.state("project", {
      url: "/projects/:projectId",
      controller: "ProjectController as prc",
      templateUrl: "projects/templates/project.html",
      resolve: {
        project: ($stateParams: ng.ui.IStateParamsService, ProjectsService: IProjectsService): ng.IPromise<IProject> => {
          return ProjectsService.getProject($stateParams["projectId"]);
        }
      }
    });

  }

  angular
      .module("ngApp.projects", [
        "projects.controller",
        "ui.router.state"
      ])
      .config(projectsConfig);
}
