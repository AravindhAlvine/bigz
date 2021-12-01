import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {

  
  text: string;

  constructor() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum tellus vitae dictum auctor. Fusce lobortis quam ipsum, id tempor neque ultrices id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum tellus vitae dictum auctor. Fusce lobortis quam ipsum, id tempor neque ultrices idLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum tellus vitae dictum auctor. Fusce lobortis quam ipsum, id tempor neque ultrices id'
   }

  ngOnInit(): void {
  }

}
