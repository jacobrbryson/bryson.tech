import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/services/resume.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  @Input() resume:Resume;

  routeTo(url:string){
    window.open(url, "_blank");
  }
}
