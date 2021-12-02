import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { JobDetailApi, JobsApi } from "./jobs.model";

@Injectable({providedIn: 'root'})
export class JobsService {
  private jobs: JobsApi = {};
  private jobDetail: JobDetailApi = {};
  private jobsUpdated = new Subject<JobsApi>();
  private jobDetailUpdated = new Subject<JobDetailApi>();

  constructor(private http: HttpClient) {}

  getJobs(){
    return {...this.jobs};
  }

  getJobDetail(){
    return {...this.jobDetail};
  }

  getJobsUpdateListener(){
    return this.jobsUpdated.asObservable();
  }

  getJobDetailUpdateListener(){
    return this.jobDetailUpdated.asObservable();
  }

  requestJobs(job: string, place: string){
    console.log("job list request");

    this.http.get(`http://localhost:3000/api/getJobs?place=${place}&job=${job}`)
      .subscribe((jobs)=>{
        this.jobs = jobs;
        this.jobsUpdated.next({...this.jobs});
      });
  }

  requestJobDetail(jobId: number){
    console.log("job detail request");
    this.jobDetail = {};
    this.http.get(`http://localhost:3000/api/getJobDetails?jobId=${jobId}`)
      .subscribe((jobDetail)=>{
        this.jobDetail = jobDetail;
        this.jobDetailUpdated.next({...this.jobDetail});
      });
  }
}
