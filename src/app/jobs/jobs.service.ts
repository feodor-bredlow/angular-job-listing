import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JobsApi } from "./jobs.model";

@Injectable({providedIn: 'root'})
export class JobsService {
  private jobs: JobsApi = {};

  constructor(private http: HttpClient) {}

  getJobs(){
    return {...this.jobs};
  }

  requestJobs(job: string, place: string){
    console.log("initiate get request");

    this.http.get(`http://localhost:3000/api/getJobs?place=${place}&job=${job}`)
      .subscribe((jobs)=>{
        this.jobs = jobs;
        console.log(this.jobs)
      });
  }
}
