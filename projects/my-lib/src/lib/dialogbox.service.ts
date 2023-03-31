import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogboxService {
  
  // public showPopup = false;
  public showPopup = new BehaviorSubject<boolean>(false)
  
  hidePopUp= () =>{ 
    this.showPopup.next(false)
  }
}
