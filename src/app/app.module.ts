import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacherList.component';
import { TeacherListDataService } from './services/teacherListData.service';


const appRoutes:Routes = [
  {
    path:'', component: TeacherListComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
