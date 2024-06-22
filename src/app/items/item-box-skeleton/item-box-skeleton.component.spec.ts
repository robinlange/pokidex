import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBoxSkeletonComponent } from './item-box-skeleton.component';

describe('ItemBoxSkeletonComponent', () => {
  let component: ItemBoxSkeletonComponent;
  let fixture: ComponentFixture<ItemBoxSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBoxSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBoxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
