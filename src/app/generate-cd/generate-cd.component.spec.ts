import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCdComponent } from './generate-cd.component';

describe('GenerateCdComponent', () => {
  let component: GenerateCdComponent;
  let fixture: ComponentFixture<GenerateCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
