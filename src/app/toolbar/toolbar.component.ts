import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() theappname : string = "Default name" ;
  constructor() {
    this.theappname = "Unit converter";
  }
}
