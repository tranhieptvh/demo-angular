import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  isLoading: boolean = false;
  form!: FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      name: this.fb.control('Test Name', [Validators.required]),
      age: this.fb.control(10, [Validators.required]),
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.form.valid) {
      console.log('Form Values:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
