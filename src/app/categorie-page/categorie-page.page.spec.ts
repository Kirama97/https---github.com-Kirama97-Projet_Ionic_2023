import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriePagePage } from './categorie-page.page';

describe('CategoriePagePage', () => {
  let component: CategoriePagePage;
  let fixture: ComponentFixture<CategoriePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
