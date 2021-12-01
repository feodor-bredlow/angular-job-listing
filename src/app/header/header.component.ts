import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onSubmit(jobSearchForm: NgForm) {
    console.log(jobSearchForm.value)
    // if (jobSearchForm.invalid) {
    //   return;
    // }
    // console.log('job', jobSearchForm.value.job);
    // console.log('place', jobSearchForm.value.place);
    // // this.postsService.addPost(form.value.job, form.value.place);
    // jobSearchForm.resetForm();
  }

}
