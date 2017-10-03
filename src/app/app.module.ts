import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from "@angular/http";
import { DataStorageService } from "./Shared/data-storage.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import {SharedModule} from "./Shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {RecipesModule} from "./recipes/recipes.module";
import {CoreModule} from "./core/core.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";


@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    AppRoutingModule,
    AuthRoutingModule,
    BrowserModule,
    HttpModule,
    SharedModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
