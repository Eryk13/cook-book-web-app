import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailPageComponent } from './recipe-detail-page.component';

describe('RecipeDetailPageComponent', () => {
  let component: RecipeDetailPageComponent;
  let fixture: ComponentFixture<RecipeDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailPageComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
