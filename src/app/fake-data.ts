import { PetInterface } from './pet-interface';

export const FakeData: PetInterface[] = [
  {
    id: 1,
    breed: 'dog',
    url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    description: 'The dog description',
    favorite: true,
  },
  {
    id: 2,
    breed: 'german uu',
    url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'The german description',
    favorite: true,
  },
  {
    id: 3,
    breed: 'goat uu',
    url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    description: 'The goat description',
    favorite: false,
  },
  {
    id: 4,
    breed: 'sheeep',
    url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'sheep desc',
    favorite: false,
  },
];
