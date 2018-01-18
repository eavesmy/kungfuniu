import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	
	List = [{
		project: "少儿搏击",
		contain: "",
		teacher: "牛超甲",
		text: "介绍"
	}]
  constructor() { }

  ngOnInit() {
  }

}
