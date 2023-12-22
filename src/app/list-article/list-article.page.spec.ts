import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListArticlePage } from './list-article.page';

describe('ListArticlePage', () => {
  let component: ListArticlePage;
  let fixture: ComponentFixture<ListArticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
