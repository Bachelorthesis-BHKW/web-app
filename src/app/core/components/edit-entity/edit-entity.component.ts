import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css'],
})
export class EditEntityComponent {
  @Input() editable = true;
  @Input() entity: Object;
  @Input() tooltips: Map<string, string> = new Map<string, string>();
  @Input() disabledFields: string[];

  constructor() {
    this.entity = {};
    this.disabledFields = [];
  }

  customTrackBy(index: number) {
    return index;
  }
}
