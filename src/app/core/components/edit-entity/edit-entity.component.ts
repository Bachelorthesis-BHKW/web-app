import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css'],
})
export class EditEntityComponent {
  @Input() entity: Object;
  @Input() disabledFields: string[];

  constructor() {
    this.entity = {};
    this.disabledFields = [];
  }

  customTrackBy(index: number) {
    return index;
  }
}
