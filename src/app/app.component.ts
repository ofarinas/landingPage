import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showFiller = false;
  public inputText: string;
  public messageList: string[] = [];

  onKeydown(event) {
    if (event.key === "Enter") {
      this.messageList.push(this.inputText);
      this.inputText = '';
      console.log(event);
    }
  }
}
