import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSettingsComponent } from './social-media-settings.component';

describe('SocialMediaSettingsComponent', () => {
  let component: SocialMediaSettingsComponent;
  let fixture: ComponentFixture<SocialMediaSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
