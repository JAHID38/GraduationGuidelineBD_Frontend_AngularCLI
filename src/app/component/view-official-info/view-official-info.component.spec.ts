import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfficialInfoComponent } from './view-official-info.component';

describe('ViewOfficialInfoComponent', () => {
  let component: ViewOfficialInfoComponent;
  let fixture: ComponentFixture<ViewOfficialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOfficialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfficialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
