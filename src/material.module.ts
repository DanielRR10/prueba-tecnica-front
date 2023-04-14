import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from "@angular/material/button";
import {MatListModule} from "@angular/material/list"




@NgModule({
  exports:[
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})

export class MaterialModule{

}