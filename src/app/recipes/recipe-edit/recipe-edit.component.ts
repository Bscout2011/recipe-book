import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id: number;
  editMode = false;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          console.log(params);
          if (params.has('id')) {
            this.id = +params.get('id')!;
            this.editMode = true;
          } else {
            this.editMode = false;
          }
          console.log("Id: " + this.id + ", Edit mode: " + this.editMode);
        })
  }
}
