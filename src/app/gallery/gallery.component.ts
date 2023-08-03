import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input()
  images = <String[]>[]

  @Input()
  enableThumbnails = false

  activeIndex = 0

  intervalId: any

  @ContentChild("imageGallery")
  imageGallery!: TemplateRef<any>

  @ContentChild("thumbnail")
  thumbnail!: TemplateRef<any>

  constructor(
    v: ViewContainerRef
  ) {

   }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngAfterContentInit(): void {


  }

  ngOnInit(): void {
    this.intervalId =  setInterval(() => {
      this.next()
    }, 2000)

  }

  next(){
    if(this.activeIndex < this.images.length - 1){
      this.activeIndex ++
    }
    else this.activeIndex = 0
  }




}
