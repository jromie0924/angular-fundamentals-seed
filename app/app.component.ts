import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <div>
      {{title}}
    </div>
  `
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = "Ultimate Angular";
  }
}