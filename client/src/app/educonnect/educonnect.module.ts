import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EduConnectRoutingModule } from "./educonnect-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CourseCreateComponent } from "./components/coursecreate/coursecreate.component";
import { StudentCreateComponent } from "./components/studentcreate/studentcreate.component";
import { TeacherCreateComponent } from "./components/teachercreate/teachercreate.component";

@NgModule({
  declarations: [
    StudentCreateComponent,
    TeacherCreateComponent,
    CourseCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    
  ]
})
export class EduconnectModule {}
