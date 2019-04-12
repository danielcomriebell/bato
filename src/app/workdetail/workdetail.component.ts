import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-workdetail',
  templateUrl: './workdetail.component.html',
  styleUrls: ['./workdetail.component.scss']
})
export class WorkdetailComponent implements OnInit {
  productID: string;
  projects: Entry<any>[] = [];

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {
    this.route.params.subscribe(params => this.productID = params['id']);
    this.contentfulService.getProjects().then(projects => {
      projects.forEach((project) => {
        if (project.sys.id === this.productID) {
          this.projects.push(project);
        }
      })
    });
  }

  ngOnInit() {
  }

}
