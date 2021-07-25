import { Component, Input } from '@angular/core';
import ESComponent, {
  esComponentAttributeDescriptions,
} from '../../../shared/interfaces/es-components/ESComponent';

@Component({
  selector: 'app-es-components-detail',
  templateUrl: './es-components-detail.component.html',
  styleUrls: ['./es-components-detail.component.css'],
})
export class EsComponentsDetailComponent {
  componentAttributeDescriptions = esComponentAttributeDescriptions;
  @Input() esComponent?: ESComponent;
  @Input() componentKenngroessenDescriptions = new Map<string, string>();

  constructor() {}
}
