import { by } from 'protractor';
import { Component, Input } from '@angular/core';
import { Entity } from './../entity';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.css']
})
export class EntityCardComponent {

  @Input('entity') entity: Entity;

  constructor() {}

}
