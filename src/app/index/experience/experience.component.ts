import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public isExpKITCollapse = false;
  public isExpLSR7Collapse = true;
  public isExpHeelsCollapse = true;
  public isExpBBBCollapse = true;
  public isExpBTCollapse = true;
  public isExpUSCLCollapse = true;

  //Make a directive for this
  //https://stackoverflow.com/questions/44121207/ngbcollapse-for-child-components-on-a-loop


  constructor() { }

  ngOnInit(): void {
  }
}