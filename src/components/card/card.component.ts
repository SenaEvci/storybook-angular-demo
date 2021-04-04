import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }

  @Input('title') title: string = '';
  @Input('subtitle') subtitle: any;
  @Input('imgSrc') imgSrc: string = '/assets/angrybirds.jpg';
  @Input('content') content = '😄';
  @Output() btnClicked = new EventEmitter<boolean>();


  @Input()
  imgWidth?: string = "300px";
}
