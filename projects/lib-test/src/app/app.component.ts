import { Component } from '@angular/core';
import { DialogboxService, MyLibModule } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-test';

  public showPopup = false
  constructor(private mylib: MyLibModule , private dialogBox: DialogboxService) {}
  public showConfirmationDialog(): void {
    this.showPopup = true;
  }


  public performAction() {
    // Perform the action here
    console.log("submit called")
    this.showPopup = false;
  }

  public cancelAction() {
    // Handle cancel action here
    console.log("Hide called")
    this.showPopup = false;
  }


}
