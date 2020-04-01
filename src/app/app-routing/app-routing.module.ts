import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../user/register/register.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {LoginComponent} from '../user/login/login.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {HomePageComponent} from '../component/public/home-page/home-page.component';
import {BookListComponent} from '../component/admin/book/book-list/book-list.component';
import {BookCreateComponent} from '../component/admin/book/book-create/book-create.component';
import {BookEditComponent} from '../component/admin/book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../component/admin/book/book-delete/book-delete.component';
import {BookDetailComponent} from '../component/admin/book/book-detail/book-detail.component';
import {AuthorListComponent} from '../component/admin/author/author-list/author-list.component';
import {AuthorCreateComponent} from '../component/admin/author/author-create/author-create.component';
import {AuthorEditComponent} from '../component/admin/author/author-edit/author-edit.component';
import {AuthorDeleteComponent} from '../component/admin/author/author-delete/author-delete.component';
import {AuthorDetailComponent} from '../component/admin/author/author-detail/author-detail.component';
import {CategoryListComponent} from '../component/admin/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../component/admin/category/category-create/category-create.component';
import {CategoryEditComponent} from '../component/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from '../component/admin/category/category-delete/category-delete.component';
import {CategoryDetailComponent} from '../component/admin/category/category-detail/category-detail.component';
import {LanguageListComponent} from '../component/admin/language/language-list/language-list.component';
import {LanguageCreateComponent} from '../component/admin/language/language-create/language-create.component';
import {LanguageEditComponent} from '../component/admin/language/language-edit/language-edit.component';
import {LanguageDeleteComponent} from '../component/admin/language/language-delete/language-delete.component';
import {LanguageDetailComponent} from '../component/admin/language/language-detail/language-detail.component';
import {PublishingListComponent} from '../component/admin/publishing/publishing-list/publishing-list.component';
import {PublishingCreateComponent} from '../component/admin/publishing/publishing-create/publishing-create.component';
import {PublishingEditComponent} from '../component/admin/publishing/publishing-edit/publishing-edit.component';
import {PublishingDeleteComponent} from '../component/admin/publishing/publishing-delete/publishing-delete.component';
import {PublishingDetailComponent} from '../component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookPublicComponent} from '../component/public/book-public/book-public.component';
import {BookNewComponent} from '../component/public/book-new/book-new.component';
import {CartListComponent} from '../component/public/cart-list/cart-list.component';
import {AdminGuardService} from '../user/_services/admin-guard.service';
import {BookCategoryComponent} from '../component/public/book-category/book-category.component';
import {OrderManagerComponent} from '../component/admin/order-manager/order-manager.component';
import {BookHotComponent} from '../component/public/book-hot/book-hot.component';
import {BookLanguageComponent} from '../component/public/book-language/book-language.component';
import {BookPublishingComponent} from '../component/public/book-publishing/book-publishing.component';
import {BookAuthorComponent} from '../component/public/book-author/book-author.component';
import {OrderListComponent} from '../user/order-list/order-list.component';
import {ChangePasswordComponent} from '../user/change-password/change-password.component';
import {UserAdminGuardService} from '../user/_services/user-admin-guard.service';
import {EditProfileComponent} from '../user/edit-profile/edit-profile.component';
import {SearchAdvancedComponent} from '../component/public/search-advanced/search-advanced.component';
import {AboutUsComponent} from '../component/public/about-us/about-us.component';
import {BookDetailPublicComponent} from '../component/public/book-detail-public/book-detail-public.component';
import {BookPriceComponent} from '../component/public/book-price/book-price.component';
import {PaymentCreateComponent} from '../component/admin/payment/payment-create/payment-create.component';
import {PaymentListComponent} from '../component/admin/payment/payment-list/payment-list.component';
import {OrderDetailComponent} from '../component/admin/order-detail/order-detail.component';
import {UserManagerComponent} from '../component/admin/user-manager/user-manager.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'book-list', component: BookListComponent, canActivate: [AdminGuardService]},
  {path: 'book-create', component: BookCreateComponent, canActivate: [AdminGuardService]},
  {path: 'book-edit/:id', component: BookEditComponent, canActivate: [AdminGuardService]},
  {path: 'book-delete/:id', component: BookDeleteComponent, canActivate: [AdminGuardService]},
  {path: 'book-detail/:id', component: BookDetailComponent, canActivate: [AdminGuardService]},
  {path: 'author-list', component: AuthorListComponent, canActivate: [AdminGuardService]},
  {path: 'author-create', component: AuthorCreateComponent, canActivate: [AdminGuardService]},
  {path: 'author-edit/:id', component: AuthorEditComponent, canActivate: [AdminGuardService]},
  {path: 'author-delete/:id', component: AuthorDeleteComponent, canActivate: [AdminGuardService]},
  {path: 'author-detail/:id', component: AuthorDetailComponent, canActivate: [AdminGuardService]},
  {path: 'category-list', component: CategoryListComponent, canActivate: [AdminGuardService]},
  {path: 'category-create', component: CategoryCreateComponent, canActivate: [AdminGuardService]},
  {path: 'category-edit/:id', component: CategoryEditComponent, canActivate: [AdminGuardService]},
  {path: 'category-delete/:id', component: CategoryDeleteComponent, canActivate: [AdminGuardService]},
  {path: 'category-detail/:id', component: CategoryDetailComponent, canActivate: [AdminGuardService]},
  {path: 'payment-create', component: PaymentCreateComponent, canActivate: [AdminGuardService]},
  {path: 'payment-list', component: PaymentListComponent, canActivate: [AdminGuardService]},
  {path: 'language-list', component: LanguageListComponent, canActivate: [AdminGuardService]},
  {path: 'language-create', component: LanguageCreateComponent, canActivate: [AdminGuardService]},
  {path: 'language-edit/:id', component: LanguageEditComponent, canActivate: [AdminGuardService]},
  {path: 'language-delete/:id', component: LanguageDeleteComponent, canActivate: [AdminGuardService]},
  {path: 'language-detail/:id', component: LanguageDetailComponent, canActivate: [AdminGuardService]},
  {path: 'publishing-list', component: PublishingListComponent, canActivate: [AdminGuardService]},
  {path: 'publishing-create', component: PublishingCreateComponent, canActivate: [AdminGuardService]},
  {path: 'publishing-edit/:id', component: PublishingEditComponent, canActivate: [AdminGuardService]},
  {path: 'publishing-delete/:id', component: PublishingDeleteComponent, canActivate: [AdminGuardService]},
  {path: 'publishing-detail/:id', component: PublishingDetailComponent, canActivate: [AdminGuardService]},
  {path: 'book-public', component: BookPublicComponent},
  {path: 'book-new', component: BookNewComponent},
  {path: 'book-hot', component: BookHotComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'cart-list', component: CartListComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-category/:id', component: BookCategoryComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-author/:id', component: BookAuthorComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-language/:id', component: BookLanguageComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-publishing/:id', component: BookPublishingComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-price/:id', component: BookPriceComponent, runGuardsAndResolvers: 'always'},
  {path: 'book-detail-public/:id', component: BookDetailPublicComponent, runGuardsAndResolvers: 'always'},
  {path: 'search-advanced/:name', component: SearchAdvancedComponent, runGuardsAndResolvers: 'always'},
  {path: 'about-us', component: AboutUsComponent, runGuardsAndResolvers: 'always'},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [UserAdminGuardService]},
  {path: 'edit-profile', component: EditProfileComponent, canActivate: [UserAdminGuardService]},
  {path: 'user-manager', component: UserManagerComponent, canActivate: [UserAdminGuardService]},
  {path: 'order-list', component: OrderListComponent, canActivate: [UserAdminGuardService]},
  {path: 'order-manager', component: OrderManagerComponent, canActivate: [AdminGuardService]},
  {path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [AdminGuardService]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
