import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class EntitiesService {

  public newEntitySubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllEntities() {
    return this.http.get('data/entities.json').map(res => res.json());
  }

  addEntity(data) {
    data.image = 'default-entity';
    this.newEntitySubject.next(data);
  }

}
