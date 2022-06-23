import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotesComponent } from './component/notes/notes.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileComponent } from './component/profile/profile.component';
import { HobbiesComponent } from './component/profile/hobbies/hobbies.component';
import { TitleCasePipe } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ProfileComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
