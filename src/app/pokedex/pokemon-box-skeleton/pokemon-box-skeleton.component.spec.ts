import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBoxSkeletonComponent } from './pokemon-box-skeleton.component';

describe('SkeletonComponent', () => {
  let component: PokemonBoxSkeletonComponent;
  let fixture: ComponentFixture<PokemonBoxSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBoxSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonBoxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
