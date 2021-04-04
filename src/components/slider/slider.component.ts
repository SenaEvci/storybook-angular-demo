import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  responsiveOptions: any = [];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  @Input()
  productsWishs = [
    { img: 'sims' },
    { img: 'angrybirds' },
    { img: 'supermario' },
    { img: 'fifa' }
  ];

  @Input()
  imgOpacity?: number = 1;

  @Input()
  imgWidth?: string = "300px";


}

