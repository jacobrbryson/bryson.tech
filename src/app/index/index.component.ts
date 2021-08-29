import { Component, OnInit } from '@angular/core';
import { ResumeService, Resume } from 'src/app/services/resume.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  resume: Resume = null;
  constructor(
    private resumeService: ResumeService
  ) { 
    this.resume = this.resumeService.resume;
  }

  ngOnInit() {
  }
}
