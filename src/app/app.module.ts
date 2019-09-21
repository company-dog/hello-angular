import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';

import { Casing } from './casing.pipe';

@NgModule({
  declarations: [AppComponent, CoursesComponent, TitleComponent, Casing],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
