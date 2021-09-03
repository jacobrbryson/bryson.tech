import { Component, OnInit, Input } from '@angular/core';
import { Resume } from 'src/app/services/resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() resume: Resume;

  constructor() { }

  ngOnInit(): void {
  }
}