import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopshowsComponent } from './topshows.component';

describe('TopshowsComponent', () => {
  let component: TopshowsComponent;
  let fixture: ComponentFixture<TopshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
