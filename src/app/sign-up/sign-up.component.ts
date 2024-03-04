import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  user: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.user); // Affichage du user dans la console
  }
}

