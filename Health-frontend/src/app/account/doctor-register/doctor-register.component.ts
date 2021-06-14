import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';


@Component({
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.less']
})
export class DoctorRegisterComponent implements OnInit {
  form1: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form1 = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', [Validators.required,Validators.minLength(10)]],
          email: ['',Validators.required],
          doctorname: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          dob: ['',Validators.required],
          gender: ['',Validators.required],
          lang: ['',Validators.required],
          specialisation: ['',Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form1.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form1.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.doctRegister(this.form1.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
