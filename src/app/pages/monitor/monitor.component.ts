import { Component } from '@angular/core';
import {TableComponent} from '../../components/table/table.component';
import {dataType} from '../../../types';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {
  data: dataType = {
    'name': 'hieptv',
    'age': 27,
  }
}
