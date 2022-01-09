import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastdetailsComponent } from './castdetails.component';

describe('CastdetailsComponent', () => {
  let component: CastdetailsComponent;
  let fixture: ComponentFixture<CastdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
