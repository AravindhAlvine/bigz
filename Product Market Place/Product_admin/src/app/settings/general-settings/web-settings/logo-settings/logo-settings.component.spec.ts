import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSettingsComponent } from './logo-settings.component';

describe('LogoSettingsComponent', () => {
  let component: LogoSettingsComponent;
  let fixture: ComponentFixture<LogoSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
