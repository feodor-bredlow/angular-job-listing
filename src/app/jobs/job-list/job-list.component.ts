import { Component, Input, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from "rxjs";

import { JobDetailDialog } from "../job-detail/job-detail-dialog.component";
import { JobDetailApi, JobsApi } from "../jobs.model";
import { JobsService } from "../jobs.service";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit, OnDestroy  {
  constructor(public dialog: MatDialog, public jobsService: JobsService) {}

  jobData: JobsApi = {};
  initialRequestSent: boolean ;
  private jobsSub: Subscription;
  private initailRequestSub: Subscription;

  viewDetails(jobId){
    console.log('from list', this.initialRequestSent);
    this.jobsService.requestJobDetail(jobId);
    this.dialog.open(JobDetailDialog);
  }

  ngOnInit(){
    this.jobData = this.jobsService.getJobs();
    this.jobsSub = this.jobsService.getJobsUpdateListener().subscribe((jobs: JobsApi)=>{
      this.jobData = jobs;
    });
    this.initailRequestSub = this.jobsService.getInitialRequesetUpdateListener().subscribe((initialRequested: boolean) =>{
      this.initialRequestSent = initialRequested;
    })
  }

  ngOnDestroy(){
    this.jobsSub.unsubscribe();
    this.initailRequestSub.unsubscribe();
  }


}
