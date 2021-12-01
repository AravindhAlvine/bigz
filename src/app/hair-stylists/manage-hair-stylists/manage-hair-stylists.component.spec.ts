import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHairStylistsComponent } from './manage-hair-stylists.component';

describe('ManageHairStylistsComponent', () => {
  let component: ManageHairStylistsComponent;
  let fixture: ComponentFixture<ManageHairStylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHairStylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHairStylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
