import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpEmailSettingsComponent } from './smtp-email-settings.component';

describe('SmtpEmailSettingsComponent', () => {
  let component: SmtpEmailSettingsComponent;
  let fixture: ComponentFixture<SmtpEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpEmailSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
