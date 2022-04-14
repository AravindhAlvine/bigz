import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MarketingManagementRoutingModule } from './marketing-management-routing.module';
import { BlogCategoriesComponent } from './blog/blog-category/blog-categories/blog-categories.component';
import { BlogPostComponent } from './blog/blog-posts/blog-post/blog-post.component';
import { BlogCommentsComponent } from './blog/blog-comment/blog-comments/blog-comments.component';

import { CreateBlogCategoryComponent } from './blog/blog-category/create-blog-category/create-blog-category.component';
import { CreateBlogCommentComponent } from './blog/blog-comment/create-blog-comment/create-blog-comment.component';
import { CreateBlogPostsComponent } from './blog/blog-posts/create-blog-posts/create-blog-posts.component';
import { CreateEmailComponent } from './email-templete/create-email/create-email.component';
import { ManageEmailComponent } from './email-templete/manage-email/manage-email.component';


@NgModule({
  declarations: [
    BlogCategoriesComponent,
    BlogPostComponent,
    BlogCommentsComponent,
    CreateBlogCategoryComponent,
    CreateBlogCommentComponent,
    CreateBlogPostsComponent,
    CreateEmailComponent,
    ManageEmailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarketingManagementRoutingModule
  ]
})
export class MarketingManagementModule { }
