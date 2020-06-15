import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOfficialInfoComponent } from './university-official-info.component';

describe('UniversityOfficialInfoComponent', () => {
  let component: UniversityOfficialInfoComponent;
  let fixture: ComponentFixture<UniversityOfficialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityOfficialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityOfficialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
