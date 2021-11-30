import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion"
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailDialog } from './jobs/job-detail/job-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
