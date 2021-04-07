import { text } from '@storybook/addon-knobs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {

  @Input('title') title: string = 'My App'

  @Input()
  toolColor?: string = 'purple';
  @Input()
  primary?= true;

  ngOnInit(): void {

  }


}
