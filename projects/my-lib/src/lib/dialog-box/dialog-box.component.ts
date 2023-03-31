import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogboxService } from '../dialogbox.service';

@Component({
  selector: 'lib-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  @Input() public title: string | undefined;
  @Input() public message: string | undefined;
  @Output() public submitAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public cancelAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showPopup = false;

  constructor() { }

  public hidePopup() {
    this.showPopup = false;
    console.log("Hide called")
    this.cancelAction.emit();
  }

  public submitRequest() {
    console.log("Show called")
    this.submitAction.emit();
    this.hidePopup();
  }
}
