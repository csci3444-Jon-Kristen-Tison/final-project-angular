import { Component, OnInit } from '@angular/core';

import { TeacherListDataService } from '../services/teacherListData.service';

import { Teacher }  from '../services/teacherListData.service';  // NOTE ilker importing the interface from the service

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacherlist.component.html'
})

export class TeacherListComponent implements OnInit 
{
  teachers: Teacher[];
  name: string;
  isToDisplayTeachers: boolean = false;

  constructor(private teacherListDataService:TeacherListDataService) 
  {
    console.log('TeacherListComponent constructor executed');
    this.name = 'Tison Final Exam Angular';
   }

  toggleToDisplayTeachers()
  {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }

  ngOnInit() {

    this.teacherListDataService.getTeachers().subscribe( (teachers) => {

      console.log(teachers);

      this.teachers = teachers;

    });
  }
}