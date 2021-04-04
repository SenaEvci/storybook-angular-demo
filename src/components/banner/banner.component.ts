import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  imgSrc: string = './assets/kadriorg.jpg';

  @Input()
  altTxt?: string = 'Pondicherry French Hotel';


  /*
  @Input()
  figCaptionTxt?: string =
    'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards, named on French streets beginning with "rue", numerous parks and charming cafés.';
*/
  @Input()
  imgHeight?: string = "500px";


}
