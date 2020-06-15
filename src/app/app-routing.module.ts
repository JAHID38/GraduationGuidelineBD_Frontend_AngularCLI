import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityOfficialInfoComponent } from './component/university-official-info/university-official-info.component';
import { ViewOfficialInfoComponent } from './component/view-official-info/view-official-info.component';
import { ViewUniversityListComponent } from './component/view-university-list/view-university-list.component';
import { FacultyInfoComponent } from './component/faculty-info/faculty-info.component';


const routes: Routes = [
  { path: "", component: ViewUniversityListComponent},
  { path: "register/official-info", component: UniversityOfficialInfoComponent},
  { path: "register/faculty-info", component: FacultyInfoComponent},
  { path: "view/official-info/:universityID", component: ViewOfficialInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
