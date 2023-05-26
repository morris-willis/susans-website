import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavingComponent } from './weaving.component';

describe('WeavingComponent', () => {
  let component: WeavingComponent;
  let fixture: ComponentFixture<WeavingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeavingComponent]
    });
    fixture = TestBed.createComponent(WeavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
