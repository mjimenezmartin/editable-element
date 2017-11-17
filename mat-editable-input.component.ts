import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mat-editable-input',
  templateUrl: './mat-editable-input.component.html',
  styleUrls: ['./mat-editable-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatEditableInputComponent {

  @Input('property') property: any;
  @Input() emptyText:string;
  updatingProperty:boolean = false;
  @Output() propertyChanged = new EventEmitter();

  editProperty(){
    this.updatingProperty = true;
  }
  propertyUpdated(val){
    this.property = val;
    this.updatingProperty = false;
    this.propertyChanged.emit(this.property);
  }

}
