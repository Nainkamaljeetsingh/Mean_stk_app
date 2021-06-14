import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        DoctorRegisterComponent


    ]
})
export class AccountModule { }