import {Component} from "@angular/core";

@Component({
  selector: 'chat-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {

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
