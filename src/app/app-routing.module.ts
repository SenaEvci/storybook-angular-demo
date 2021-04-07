import { BannerComponent } from './../components/banner/banner.component';
import { LinkComponent } from './../components/link/link.component';
import { CardComponent } from './../components/card/card.component';
import { ImageComponent } from './../components/image/image.component';
import { ToolbarComponent } from 'src/components/toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: ToolbarComponent },
  { path: "toolbar", component: ToolbarComponent },
  { path: "image", component: ImageComponent },
  { path: "card", component: CardComponent },
  { path: "link", component: LinkComponent },
  { path: 'banner', component: BannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
