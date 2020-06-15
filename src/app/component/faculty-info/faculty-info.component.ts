import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/service/rest-api.service';
import { Faculty } from '../FacultyInformation';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './faculty-info.component.html',
  styleUrls: ['./faculty-info.component.css']
})
export class FacultyInfoComponent implements OnInit {
  university: any
  faculty: Faculty = new Faculty("", "", "", 0);
  message: any
  id: number;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {

    this.universityList();
    
  }

  universityList(){
    this.service.getUniversityList().subscribe(
      response => {
        this.university = response;
      }
    )
  }

  registerFaculty(){
    this.service.createFaculty(this.faculty).subscribe(
      response => {
        this.message = response;
      }
    )
  }

}
