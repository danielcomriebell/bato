import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProjects().then(projects =>{
      projects.forEach((project) =>{
        this.projects.push(project);
      })
    });
    console.log(this.projects);
  }

}
