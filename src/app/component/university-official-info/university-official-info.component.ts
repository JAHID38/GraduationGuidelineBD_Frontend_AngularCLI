import { Component, OnInit } from '@angular/core';
import { OfficialInfo } from '../OfficialInformation';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/service/rest-api.service';

// export class OfficialInfo{
//   constructor(
//     public fullName: string,
//     public shortName: string
//   ){}
// }

@Component({
  selector: 'app-university-official-info',
  templateUrl: './university-official-info.component.html',
  styleUrls: ['./university-official-info.component.css']
})
export class UniversityOfficialInfoComponent implements OnInit {

offInfo: OfficialInfo = new OfficialInfo("", "", "", null,"", "", "", "", "", "", "", "");

id=1;
message: any;

  constructor(private router: Router,
    private service: RestAPIService) { }

  ngOnInit(): void {
  }

  officialInfoReg(){
   // 
   this.service.createUniversity(this.offInfo)
   .subscribe(
     response => {
       this.message = response;
     }
   )
   this.router.navigate(['view/official-info', this.id]);
  }

}
