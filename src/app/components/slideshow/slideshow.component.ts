import {  AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  public mySwiper: Swiper;

  @Input() movies: Movie[];

  constructor() { }


  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    })
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }
  
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

  ngOnInit(): void {
  }


}
