import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-verifier',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <textarea
        [(ngModel)]="text"
        placeholder="Write your text here..."
        rows="4"
        class="text-input"
      ></textarea>
      
      <button (click)="verifyText()" class="verify-button">
        Verify
      </button>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 400px;
      margin: 2rem auto;
      padding: 1rem;
    }

    .text-input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: inherit;
      resize: vertical;
    }

    .verify-button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .verify-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class TextVerifierComponent {
  text: string = '';

  verifyText() {
    if (this.text.trim()) {
      console.log('Text is not empty:', this.text);
    } else {
      console.log('Text is empty');
    }
  }
}