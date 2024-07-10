import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: 'Fabricadabra'
  };

  onLogoClicked() {
    alert('Hello fellow fabric horder!');
  }

  onKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }
}
