import { PetInterface } from './../../pet-interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  @Input() pet: PetInterface;
  @Output() onAddFavorite: EventEmitter<PetInterface> = new EventEmitter();
  @Output() onMakeDelete: EventEmitter<PetInterface> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFavorite() {
    this.onAddFavorite.emit();
  }

  onDelete(pet:PetInterface) {
    console.log('delete' ,  pet)
    this.onMakeDelete.emit(pet);
  }
}
