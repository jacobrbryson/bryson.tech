import { Component, OnInit } from '@angular/core';
import { TestTasksService } from '../test-tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TestTasksService) { }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

}
