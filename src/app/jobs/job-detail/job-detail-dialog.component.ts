import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from "rxjs";

import jobDetail from '../job-data-simplified';
import { JobDetailApi } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: "app-job-detail-dialog",
  templateUrl: "./job-detail-dialog.component.html",
})
export class JobDetailDialog implements OnInit, OnDestroy{
  constructor( public jobsService: JobsService) {}

  jobDetail: JobDetailApi = {};
  private jobDetailSub: Subscription;

  ngOnInit(){
    this.jobDetail = this.jobsService.getJobDetail();
    this.jobDetailSub = this.jobsService.getJobDetailUpdateListener().subscribe((jobDetail: JobDetailApi)=>{
      this.jobDetail = jobDetail;
    });
  }

  ngOnDestroy(){
    this.jobDetailSub.unsubscribe();
  }

}
