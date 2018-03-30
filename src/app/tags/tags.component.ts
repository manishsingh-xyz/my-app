import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: any[] = [];
  tagdata:string;
  constructor() { }

  ngOnInit() {
  }

  addTag(tag): void{  
    if(tag !== undefined){
      if(tag !== ""){
        this.tagdata = '';    
        this.tags.push(tag);
      }
    }      
  }

  removeTag(index): void {
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
}
