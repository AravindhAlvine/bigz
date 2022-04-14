import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailEmailSettingsComponent } from './gmail-email-settings.component';

describe('GmailEmailSettingsComponent', () => {
  let component: GmailEmailSettingsComponent;
  let fixture: ComponentFixture<GmailEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailEmailSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
