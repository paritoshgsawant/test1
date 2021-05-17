import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course=[
    {'id':1 , 'name':'learn angular','discription':' scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','image':'./assets/images/angular.jpg'},
    {'id':2 , 'name':'learn  JavaScript ','discription':' scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','image':'./assets/images/js.jpg'},
    {'id':3 , 'name':'learn PHP ','discription':' scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','image':'./assets/images/php.jpg'},
    {'id':4 , 'name':'learn HTML ','discription':'  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','image':'./assets/images/html.jpg'}
    
  ]

}
