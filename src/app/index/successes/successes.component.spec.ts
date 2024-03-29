import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuccessesComponent } from './successes.component';

describe('SuccessesComponent', () => {
  let component: SuccessesComponent;
  let fixture: ComponentFixture<SuccessesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
