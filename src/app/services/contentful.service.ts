import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';


const CONFIG = {
  space: 'd0ckeaxwel3v',
  accessToken: '024a388ef891c01e14fd52adf7cf39867e6f696e1b86ea68103758db77df6910',

  contentTypeIds: {
    projects: 'projects',
  }
}


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  constructor() { }


  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.projects
    }, query))
      .then(res => res.items);
  }
}
