import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ResumeService } from '../../resume/resume.service';
import { Resume } from '../../resume/resume';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  Resume: Resume;
  
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  constructor(private resumeService: ResumeService) { }

  getResume(): void {
    this.resumeService.getResume()
    .subscribe(resume => this.Resume = resume);
  }

  ngOnInit(): void {
    //this.getResume();
  }
  
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}