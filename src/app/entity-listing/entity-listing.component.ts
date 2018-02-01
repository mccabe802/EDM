import { Component, OnInit } from '@angular/core';
import { EntitiesService } from './../services/entities.service';
import { UtilService } from './../services/util.service';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { Entity } from './../entity';

@Component({
  selector: 'app-entity-listing',
  templateUrl: './entity-listing.component.html',
  styleUrls: ['./entity-listing.component.css']
})
export class EntityListingComponent implements OnInit {

  entities: Array<Entity> = [];
  error: string = '';
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(
    private entitiesService: EntitiesService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.entitiesService.getAllEntities()
      .subscribe(
        data => this.entities = data,
        error => this.error = error.statusText
      );

    this.entitiesService.newEntitySubject.subscribe(
      data => this.entities = [data, ...this.entities]
    );
  }

}
