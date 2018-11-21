import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { TextComponent } from './text/text.component';
import { WordtonumberPipe } from './wordtonumber.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TextComponent,
    WordtonumberPipe,
    FavoriteComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
