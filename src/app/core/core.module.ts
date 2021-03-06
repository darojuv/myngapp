
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../Shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
  HeaderComponent,
  HomeComponent
    ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:
  [
    AppRoutingModule,
    HeaderComponent
  ]
  })
export class CoreModule {

}
