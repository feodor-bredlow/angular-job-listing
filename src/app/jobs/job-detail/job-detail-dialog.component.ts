import {Component} from '@angular/core';
import { jobDetail } from '../job-data-simplified';

@Component({
  selector: "app-job-detail-dialog",
  templateUrl: "./job-detail-dialog.component.html",
})
export class JobDetailDialog {
  jobDetail = jobDetail;


}
