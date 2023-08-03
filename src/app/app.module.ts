import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterWrapperComponent } from './components/counter-wrapper/counter-wrapper.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntryComponent } from './todo-list/todo-entry/todo-entry.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryImageComponent } from './gallery/gallery-image/gallery-image.component';
import { GalleryThumbnailListComponent } from './gallery/gallery-thumbnail-list/gallery-thumbnail-list.component';
import { GalleryThumbnailComponent } from './gallery/gallery-thumbnail/gallery-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterWrapperComponent,
    TodoListComponent,
    TodoEntryComponent,
    GalleryComponent,
    GalleryImageComponent,
    GalleryThumbnailListComponent,
    GalleryThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
