import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
