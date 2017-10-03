// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Response } from "@angular/http";
import {DataStorageService} from "../../Shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header'
})
export class HeaderComponent{

  constructor(private dataStorageSrvc: DataStorageService,
              public authService: AuthService) {
  }

  onSave() {
    this.dataStorageSrvc.storeRecipes().subscribe(
      (resp: Response) => {
        console.log(resp);
      });
  }

  fetchData() {
    this.dataStorageSrvc.getRecipes();
  }

  signOut() {
    this.authService.signOut();
  }

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
}
