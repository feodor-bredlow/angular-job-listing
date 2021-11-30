import { Component } from "@angular/core";
import { simpleJobs } from '../data-example-simplified';

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent  {
  jobData = simpleJobs;

}
