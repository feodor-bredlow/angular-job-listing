import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';

import { simpleJobs } from '../data-example-simplified';
import { JobDetailDialog } from "../job-detail/job-detail-dialog.component";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent  {
  constructor(public dialog: MatDialog) {}

  jobData = simpleJobs;

  viewDetails(){
    this.dialog.open(JobDetailDialog);
  }

}
