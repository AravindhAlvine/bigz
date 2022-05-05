import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRulesComponent } from './return-rules.component';

describe('ReturnRulesComponent', () => {
  let component: ReturnRulesComponent;
  let fixture: ComponentFixture<ReturnRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
