import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadFormComponent } from './up-load-form.component';

describe('UpLoadFormComponent', () => {
  let component: UpLoadFormComponent;
  let fixture: ComponentFixture<UpLoadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpLoadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLoadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
