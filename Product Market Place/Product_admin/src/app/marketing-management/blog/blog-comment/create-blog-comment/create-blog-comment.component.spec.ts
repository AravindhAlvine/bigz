import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogCommentComponent } from './create-blog-comment.component';

describe('CreateBlogCommentComponent', () => {
  let component: CreateBlogCommentComponent;
  let fixture: ComponentFixture<CreateBlogCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
