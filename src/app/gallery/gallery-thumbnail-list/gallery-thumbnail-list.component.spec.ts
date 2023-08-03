import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryThumbnailListComponent } from './gallery-thumbnail-list.component';

describe('GalleryThumbnailListComponent', () => {
  let component: GalleryThumbnailListComponent;
  let fixture: ComponentFixture<GalleryThumbnailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryThumbnailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryThumbnailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
