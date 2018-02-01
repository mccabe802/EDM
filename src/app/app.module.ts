import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntityListingComponent } from './entity-listing/entity-listing.component';
import { EntityCardComponent } from './entity-card/entity-card.component';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';

import { EntitiesService } from './services/entities.service';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityListingComponent,
    EntityCardComponent,
    AddListingFormComponent,
    SortByPipe,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EntitiesService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
