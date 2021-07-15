import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openz';
  a=200000;
  b=200000;
  constructor() { }


 
  ngOnInit() {
   
   
  }

  Change(value) {
   
    this.a=value;
  }

  Changes(value) {
   
    this.b=value;
  }
}
