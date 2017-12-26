import { TestBed, inject } from '@angular/core/testing';



import { TeacherListDataService } from './teacherListData.service';



describe('ProfListDataService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [TeacherListDataService]

    });

  });



  it('should be created', inject([TeacherListDataService], (service: TeacherListDataService) => {

    expect(service).toBeTruthy();

  }));

});