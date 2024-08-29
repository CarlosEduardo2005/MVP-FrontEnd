// src/app/components/dish-list/dish-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
    });
  }

  deleteDish(id: number) {
    this.dishService.deleteDish(id).subscribe(() => {
      this.loadDishes();
    });
  }
}
