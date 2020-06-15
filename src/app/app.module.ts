import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityOfficialInfoComponent } from './component/university-official-info/university-official-info.component';
import { ViewOfficialInfoComponent } from './component/view-official-info/view-official-info.component';
import { ViewUniversityListComponent } from './component/view-university-list/view-university-list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FacultyInfoComponent } from './component/faculty-info/faculty-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityOfficialInfoComponent,
    ViewOfficialInfoComponent,
    ViewUniversityListComponent,
    HeaderComponent,
    FooterComponent,
    FacultyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
