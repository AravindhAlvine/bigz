import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHairStylistComponent } from './create-hair-stylist.component';

describe('CreateHairStylistComponent', () => {
  let component: CreateHairStylistComponent;
  let fixture: ComponentFixture<CreateHairStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHairStylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHairStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
