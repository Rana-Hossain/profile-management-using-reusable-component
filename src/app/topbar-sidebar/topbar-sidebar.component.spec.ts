import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSidebarComponent } from './topbar-sidebar.component';

describe('TopbarSidebarComponent', () => {
  let component: TopbarSidebarComponent;
  let fixture: ComponentFixture<TopbarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
