import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HighlightDirective } from '../my-directives/highlight.directive';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    // HomeComponent,
    // HighlightDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
