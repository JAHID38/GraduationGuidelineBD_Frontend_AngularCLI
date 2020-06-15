import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUniversityListComponent } from './view-university-list.component';

describe('ViewUniversityListComponent', () => {
  let component: ViewUniversityListComponent;
  let fixture: ComponentFixture<ViewUniversityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUniversityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUniversityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
