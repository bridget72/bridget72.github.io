import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start: boolean = false
  start2: boolean = false
  start3: boolean = false
  start4: boolean = false

  toggle() {}

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }
  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    setTimeout(() => this.start = true, 1000)
    this.start2 = true
  }

  onWaitComplete() {
    this.start3 = true;
  }
}

// export class NavbarComponent {
//   showBurgerMenu: boolean = false;
//   constructor() {}

// }
