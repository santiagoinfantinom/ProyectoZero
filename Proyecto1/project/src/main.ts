import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TextVerifierComponent } from './app/components/text-verifier/text-verifier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextVerifierComponent],
  template: `
    <div class="app-container">
      <h1>Text Verifier</h1>
      <app-text-verifier></app-text-verifier>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      text-align: center;
    }

    h1 {
      color: #333;
      margin-bottom: 2rem;
    }
  `]
})
export class App {
}

bootstrapApplication(App);