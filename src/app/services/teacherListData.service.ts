import { Injectable } from '@angular/core';

import { Http } from '@angular/http'; // NOTE ilker importing Http

import 'rxjs/add/operator/map'; // NOTE ilker importing react JS extension operator map

@Injectable()

export class TeacherListDataService {
    
    constructor(public http:Http) { console.log("TeacherListDataService constructor executing"); }
  
    getTeachers()   
    {   
        // NOTE ilker below returns an "observable" from rxjs (react JS extension)    
        return this.http.get('http://localhost:9016/api/v1/teachers')
      
        .map( response => response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET 
    }

}

//NOTE ilker using 'export' below allows any component using this service to be able to import the below interface

export interface Teacher {

    teacherId: string,
    name:string,
    lastname: string,
    title: string,
    age: number,
    isFullTime: boolean,
    updatedOn: Date 

}