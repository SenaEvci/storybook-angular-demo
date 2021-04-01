import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from '../components/image/image.component';
import { LinkComponent } from '../components/link/link.component';
import { BannerComponent } from '../components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LinkComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
