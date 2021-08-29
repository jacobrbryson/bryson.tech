import { Component, OnInit, Input } from '@angular/core';
import { Resume } from 'src/app/services/resume.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {
  @Input() resume: Resume;

  constructor() { }

  ngOnInit(): void {
  }

}
