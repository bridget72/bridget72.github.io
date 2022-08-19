import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height:'300px',
        opacity: 1,
        backgroundColor: '#BACFB4'
      })),
      state('closed', style({
        height: '50px',
        opacity: 1,
        backgroundColor: '#6B955F'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      // transition('* => closed', [
      //   animate('1s')
      // ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('0.5s',
          style ({ opacity: '*' }),
        ),
      ]),
      // transition('* => *', [
      //   animate('1s')
      // ]),
    ]),
    trigger('openClose1', [
      // ...
      state('open', style({
        height:'300px',
        opacity: 1,
        backgroundColor: '#EDDEA4'
      })),
      state('closed', style({
        height: '50px',
        opacity: 1,
        backgroundColor: '#F7A072'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      // transition('* => closed', [
      //   animate('1s')
      // ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('0.5s',
          style ({ opacity: '*' }),
        ),
      ]),
      // transition('* => *', [
      //   animate('1s')
      // ]),
    ])
  ]
})

export class ResearchComponent {

  @Input() logging = false;
  isOpen = false;
  isOpen1 = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  toggle1() {
    this.isOpen1 = !this.isOpen1;
  }
  onAnimationEvent(event: AnimationEvent) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }


  openTab(event: any, tabName:any) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    x = Array.from(x as HTMLCollectionOf<HTMLElement>);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName)!.style.display = "block";
    event.currentTarget.className += " is-active";
    }

    

}
