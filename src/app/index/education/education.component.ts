import { Component, OnInit, Input } from '@angular/core';
import { Resume } from 'src/app/services/resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() resume: Resume;
  
  constructor() { }

  ngOnInit(): void {
  }

}
