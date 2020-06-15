import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/service/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-university-list',
  templateUrl: './view-university-list.component.html',
  styleUrls: ['./view-university-list.component.css']
})
export class ViewUniversityListComponent implements OnInit {

  tableList: any;
  universityID

  constructor(private service: RestAPIService,
    private router: Router) { }

  ngOnInit(): void {

    this.service.getUniversityList().subscribe(
      response => {
        this.tableList = response;
      }
    )
  }

  passID(){
    this.router.navigate(['view/official-info', this.universityID])
  }

}
