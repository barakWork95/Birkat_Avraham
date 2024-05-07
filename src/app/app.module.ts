import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { RouterModule } from '@angular/router';
import { AboutModule } from './pages/about/about.module';
import { MoreActionsModule } from './pages/more-actions/more-actions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomepageModule,
    GalleryModule,
    AboutModule,
    MoreActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
