import { Component, Input,
    trigger, state, animate, transition, style } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggleState', [
    // What happens when toggleState is true
      state('true' , style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)'})),
      // What happens when toggleState is false
      state('false', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-30%,0,0)'})),
       // transition
      transition('* => *', animate('200ms')),
    ])
  ],
})
export class AppComponent  { 
  toggle = false;
    handleClick(){
        this.toggle = !this.toggle
    }
}
