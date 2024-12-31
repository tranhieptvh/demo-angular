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
  private initData: dataType = {
    'name': 'hieptv',
    'age': 27,
  }

  private _data: dataType = { ...this.initData };

  get data(): dataType {
    return this._data;
  }

  set data(newData: dataType) {
    if (this.data.name != newData.name) {
      alert('diff');
    }
    this._data = newData;
  }

  handleClickButton() {
    this.data = {
      'name': 'xxx',
      'age': 20,
    }
  }
}
