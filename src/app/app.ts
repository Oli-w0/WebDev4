import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-app');


  // assign variables
  count : number = 0;
  showMessage : boolean = false;
  // create functions
  IncrementCount()
  {
    this.count++;
  }
  // toggle the message
  dblClickToggle() {
  this.showMessage = !this.showMessage;
}

}
