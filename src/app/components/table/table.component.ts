import {Component, Input} from '@angular/core';
import {dataType} from '../../../types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() propData: dataType = {
    name: '',
    age: 0,
  };
}
