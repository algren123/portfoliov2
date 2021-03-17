import { Component, OnInit } from '@angular/core';
import { ProjectTemplate } from '../project-template';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectList: ProjectTemplate[] = [{
    title: 'Covid Tracker',
    hashtags: '#Angular #TypeScript #Sass #API #FilterPipe #Responsive',
    description: 'This project focuses on the the main parts of the Coronavirus data. It has multiple API calls It was made using Angular, TypeScript and Sass and is responsive. Wanted to build a webapp from the ground up based on info from API calls. It also features a custom Search Filter Pipe.',
    gitHubLink: 'https://github.com/algren123/covid-tracker',
    liveLink: 'https://algren123.github.io/covid-tracker/'
  },
  {
    title: 'Odeko Replica Website',
    hashtags: '#React #Hooks #JavaScript #Material-UI #Sass #SplideJS',
    description: "This website is based on Odeko's old website and was created with React. I've used React (with Hooks and Router), JavaScript, Sass and Material-UI as the framework. SplideJS component was used for the slider.",
    gitHubLink: 'https://github.com/algren123/odeko-replica-website',
    liveLink: 'https://odeko-replica-react.netlify.app/'
  },
  {
    title: 'Angular To-do List',
    hashtags: '#Angular #TypeScript #CDKDrag&Drop #SweetAlerts #Sass',
    description: 'Project was created with Angulat/TypeScript. It is a Todo list that has some additional features such as: CDK Drag&Drop, SweetAlerts, local memory.',
    gitHubLink: 'https://github.com/algren123/angular-todo',
    liveLink: 'https://algren123.github.io/angular-todo/'
  }
]
}
