import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficialInfo } from '../OfficialInformation';
import { RestAPIService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-view-official-info',
  templateUrl: './view-official-info.component.html',
  styleUrls: ['./view-official-info.component.css']
})
export class ViewOfficialInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: RestAPIService) { }

  officialInfo: any;
  universityID: number;
  facultyList: any;

  ngOnInit(): void {
    
    this.getUniversityOfficialInfo();
    this.getFacultyListInfo();
  }

  /*
  GET University details OFFICIAL INFORMATION
  by universityID
  */
  getUniversityOfficialInfo(){
    this.universityID = this.route.snapshot.params['universityID']
    this.service.getUniversity(this.universityID).subscribe(
      response => {
        this.officialInfo = response;        
      }
    )
  }

  /*
  GET all details FACULTY INFORMATION
  of a specific university
  by universityID
  */
  getFacultyListInfo(){
    this.service.getFacultyList(this.universityID).subscribe(
      response => {
        this.facultyList = response;
      }
    )
  }

}
