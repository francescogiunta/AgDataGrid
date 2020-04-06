import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AgEditorComponent, ICellEditorAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellEditorParams} from 'ag-grid-community';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-numeric-cell-editor',
  templateUrl: './numeric-cell-editor.component.html',
  styleUrls: ['./numeric-cell-editor.component.scss']
})
export class NumericCellEditorComponent implements ICellEditorAngularComp {

  value: number;
  params: ICellEditorParams;
  cellWidth: string;

  @ViewChild('container', {read: ViewContainerRef}) public container;
  @ViewChild('numericInput', {read: ViewContainerRef}) numericInput;

  constructor() {
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
    // this.numericEditor.focus();
    window.setTimeout(() => {
      this.numericInput.element.nativeElement.focus();
    }, 0);
  }

  agInit(params: ICellEditorParams): void {
    this.params = params;
    this.value = params.value;

    this.cellWidth = params.column.getActualWidth() + 'px';
  }

  // focusIn(): void {
  // }
  //
  // focusOut(): void {
  //   this.params.stopEditing();
  // }

  //
  // getFrameworkComponentInstance(): any {
  // }

  getValue(): any {
    return this.value;
  }

  isCancelAfterEnd(): boolean {
    // return this.cancelAfterEnd;

    // example - will reject the number if it contains the value 007
    // - not very practical, but demonstrates the method.
    const value = this.getValue();
    return value.indexOf('007') >= 0;
    return false;
  }

  isCancelBeforeStart(): boolean {
    return false;
  }

  isPopup(): boolean {
    return true;
  }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }


}