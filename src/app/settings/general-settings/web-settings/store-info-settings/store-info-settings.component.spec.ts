import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInfoSettingsComponent } from './store-info-settings.component';

describe('StoreInfoSettingsComponent', () => {
  let component: StoreInfoSettingsComponent;
  let fixture: ComponentFixture<StoreInfoSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreInfoSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInfoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
