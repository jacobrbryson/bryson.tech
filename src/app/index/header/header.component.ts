import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ResumeService } from '../../resume/resume.service';
import { Observable, of } from 'rxjs';
import { Resume } from '../../resume/resume';
import { ToolType } from 'src/app/resume/tooltype';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  Resume: Resume;
  tool_types: ToolType[];
  
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  constructor(private resumeService: ResumeService) { }

  getResume(): void {
    this.resumeService.getResume()
    .subscribe(resume => this.Resume = resume);
  }

  getToolTypes(): void {
    this.resumeService.getToolTypes()
    .subscribe(tool_types => this.tool_types = tool_types);
  }

  ngOnInit(): void {
    //this.getResume();
  }
  
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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