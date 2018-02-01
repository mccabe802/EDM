import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntitiesService } from './../services/entities.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newEntityForm') newEntityForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(
    private entitiesService: EntitiesService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {
    this.entitiesService.addEntity(data);
    this.newEntityForm.reset();
  }

}
