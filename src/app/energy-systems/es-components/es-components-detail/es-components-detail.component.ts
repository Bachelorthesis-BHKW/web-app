import { Component, Input } from '@angular/core';
import ESComponent from '../../../shared/interfaces/ESComponent';

@Component({
  selector: 'app-es-components-detail',
  templateUrl: './es-components-detail.component.html',
  styleUrls: ['./es-components-detail.component.css'],
})
export class EsComponentsDetailComponent {
  @Input() esComponent?: ESComponent;

  constructor() {}
}