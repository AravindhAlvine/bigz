import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogPostsComponent } from './create-blog-posts.component';

describe('CreateBlogPostsComponent', () => {
  let component: CreateBlogPostsComponent;
  let fixture: ComponentFixture<CreateBlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
