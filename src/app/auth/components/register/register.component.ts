import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../../../../app/shared/types/appState.interface';

import { registerAction } from '../../store/actions';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.intializeForm();
    this.intializeValues()
  }

  intializeValues(): void {
    this.isSubmitting$ = this.store.pipe((select(isSubmittingSelector)));
  }

  intializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log(this.form.value, this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
  }

}
