import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HighlightDirective } from './my-directives/highlight.directive';
import { ChartCodeComponent } from './chart-code/chart-code.component';
import { HomeModule } from './home/home.module';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { SeoSettingComponent } from './settings-seo/seo-setting/seo-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HighlightDirective,
    ChartCodeComponent,
    TestCompoComponent,
    SeoSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
