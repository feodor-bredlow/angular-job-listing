import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { JobsApi } from "../jobs/jobs.model";
import { JobsService } from "../jobs/jobs.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  jobs: JobsApi;

  constructor(public jobsService: JobsService) {}

  onSubmit(jobSearchForm: NgForm) {
    this.jobsService.requestJobs(jobSearchForm.value.jobInput, jobSearchForm.value.placeInput);
  }



}
