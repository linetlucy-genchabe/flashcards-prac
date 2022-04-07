import { Component, OnInit } from '@angular/core';
import { Languages } from '../languages';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languages:Languages [] =[
   new Languages (1,"javascript","used to enhance functionality"),
   new Languages (2,"html","used for basic structure of pages"),
   new Languages (3,"css","used for basic structure of pages"),
   new Languages (4,"bootstrap","used for basic structure of pages"),
   new Languages (5,"jquery","used for basic structure of pages"),

  ];
 
  toggleDetails(index: any){
    this.languages[index]['showDescription'] = !this.languages[index]['showDescription'];
  }
  constructor() { }

  ngOnInit(): void {
  }
  


}
