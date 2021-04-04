
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from '../components/image/image.component';
import { LinkComponent } from '../components/link/link.component';
import { BannerComponent } from '../components/banner/banner.component';
import { SliderComponent } from '../components/slider/slider.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { CardComponent } from 'src/components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LinkComponent,
    BannerComponent,
    SliderComponent,
    AvatarComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
