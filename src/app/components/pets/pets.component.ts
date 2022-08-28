import { PetInterface } from './../../pet-interface';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: PetInterface[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService
      .getPets()
      .subscribe((returnedPets) => (this.pets = returnedPets));
  }

  addFavorite(pett: PetInterface) {
    pett.favorite = !pett.favorite;
    this.petService.updatePetFavorite(pett).subscribe();
  }

  deletepets(pet: PetInterface) {
    this.petService
      .delete(pet)
      .subscribe(
        () => (this.pets = this.pets.filter((item) => item.id !== pet.id))
      );
  }

  addPet(pet:PetInterface){

    console.log(pet)
    this.petService.addPet(pet).subscribe(pet => this.pets.push(pet))

  }

}
