import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewOfficialInfoComponent } from '../component/view-official-info/view-official-info.component';
import { OfficialInfo } from '../component/OfficialInformation';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient) { }

  public createUniversity(university){
    return this.http.post("http://localhost:8080/register/university", university,
    {responseType:'text' as 'json'});
  }

  public getUniversity(universityID){
    return this.http.get(`http://localhost:8080/view/official-info/${universityID}`);
    //  return this.http.get("http://localhost:8080/view/official-info/"+universityID);
  }

  public getUniversityList(){
    return this.http.get("http://localhost:8080/view/university-list");
  }

  public createFaculty(faculty){
    return this.http.post("http://localhost:8080/register/faculty",
    faculty, {responseType: 'text' as 'json'});
  }

  public getFacultyList(universityID){
    // return this.http.get("http://localhost:8080/view/"+universityID+"/faculty-list")
    return this.http.get(`http://localhost:8080/view/${universityID}/faculty-list`);
  }

  // public getUniversityName(){
  //   return this.http.get("http://localhost:8080/get-university-name");
  // }
}
