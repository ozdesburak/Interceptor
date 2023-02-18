import { Component } from '@angular/core';
import { ApiService, Posts } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//#region to [VARIABLE]

posts: Posts[]
title = 'Interceptors App';

//#endregion [VARIABLE]


constructor(private apiSerivce: ApiService) { }

getData(): void {
  this.apiSerivce.getData().subscribe(data => this.posts = data);
}

ngOnInit(): void {
  this.getData();
}
}
