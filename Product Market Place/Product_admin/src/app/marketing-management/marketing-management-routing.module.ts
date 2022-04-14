import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogCategoriesComponent } from './blog/blog-category/blog-categories/blog-categories.component';
import { BlogPostComponent } from './blog/blog-posts/blog-post/blog-post.component';
import { BlogCommentsComponent } from './blog/blog-comment/blog-comments/blog-comments.component';

import { CreateBlogCategoryComponent } from './blog/blog-category/create-blog-category/create-blog-category.component';
import { CreateBlogCommentComponent } from './blog/blog-comment/create-blog-comment/create-blog-comment.component';
import { CreateBlogPostsComponent } from './blog/blog-posts/create-blog-posts/create-blog-posts.component';
import { CreateEmailComponent } from './email-templete/create-email/create-email.component';
import { ManageEmailComponent } from './email-templete/manage-email/manage-email.component';


const routes: Routes = [
  {
    path: '',
    children: [
      
      { path: '', redirectTo: 'blog-categories', },
      { path: 'blog-categories', component: BlogCategoriesComponent, },
      { path: 'blog-post', component: BlogPostComponent, },
      { path: 'blog-comments', component: BlogCommentsComponent, },
      { path: 'manage-email-templete', component: ManageEmailComponent, },

      { path: 'create-blog-categories', component: CreateBlogCategoryComponent, },
      { path: 'create-blog-comments', component: CreateBlogCommentComponent, },
      { path: 'create-blog-post', component: CreateBlogPostsComponent, },
      { path: 'create-email-templete', component: CreateEmailComponent, },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingManagementRoutingModule { }
