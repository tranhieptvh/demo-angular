import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
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

  @Output() emitHandleClickButton = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  handleClickButton() {
    this.emitHandleClickButton.emit();
  }

}
