import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {

  @Input() item: Item;
  @Output() itemUpdated = new EventEmitter<Item>();
  @Output() itemDeleted = new EventEmitter<Item>();
  @Output() changesCanceled = new EventEmitter<Item>();

  itemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item.isFirstChange) {
      this.createForm();
    }
    this.updateForm(changes.item.currentValue);
  }

  submit(): void {
    if (this.itemForm.valid) {
      const updatedItem = this.itemForm.value as Item;
      updatedItem.id = this.item.id;
      this.itemUpdated.emit(updatedItem);
    }
  }

  delete(): void {
    this.itemDeleted.emit(this.item);
  }

  cancel(): void {
    this.updateForm(this.item);
    this.changesCanceled.emit(this.item);
  }

  private createForm(): void {
    this.itemForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  private updateForm(item: Item): void {
    this.itemForm.setValue({
      name: item.name,
      description: item.description
    });
  }

}
