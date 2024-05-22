import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  keyboardForm: FormGroup;
  switchTypes = ['Cherry Blue', 'Cherry Red', 'Cherry Brown', 'Gateron Yellow', 'Optics'];
  caseColors = ['Black', 'White', 'Gray', 'Blue', 'Red', 'Green', 'Yellow', 'Purple'];
  keycapColors = ['Black', 'White', 'Gray', 'Blue', 'Red', 'Green', 'Yellow', 'Purple'];
  layouts = ['ANSI', 'ISO'];
  formFactors = ['60%', '65%', '70%', '75%', '80%', '96%', '100%'];
  constructor(private fb: FormBuilder) {
    this.keyboardForm = this.fb.group({
      switchType: ['', Validators.required],
      caseColor: ['', Validators.required],
      keycapColor: ['', Validators.required],
      layout: ['', Validators.required],
      formFactor: ['', Validators.required],
      hasRgb: [false],
      budget: [0, Validators.required],
      comments: [''],
      email: [0, Validators.required],
    });
  }

  onSubmit() {
    console.log('Submitted keyboard:', this.keyboardForm);
  }
}
