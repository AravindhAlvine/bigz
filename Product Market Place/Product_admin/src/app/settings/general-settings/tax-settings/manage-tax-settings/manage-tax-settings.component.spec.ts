import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTaxSettingsComponent } from './manage-tax-settings.component';

describe('ManageTaxSettingsComponent', () => {
  let component: ManageTaxSettingsComponent;
  let fixture: ComponentFixture<ManageTaxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTaxSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTaxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
