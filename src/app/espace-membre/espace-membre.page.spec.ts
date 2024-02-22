import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspaceMembrePage } from './espace-membre.page';

describe('EspaceMembrePage', () => {
  let component: EspaceMembrePage;
  let fixture: ComponentFixture<EspaceMembrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspaceMembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
