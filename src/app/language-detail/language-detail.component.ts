import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '../languages';
@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {

  @Input()
  language!: Languages;

  constructor() { }

  ngOnInit(): void {
  }

}
