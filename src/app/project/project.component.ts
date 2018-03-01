import {
    Component,
    OnInit
} from '@angular/core';

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
    }, {
        project: "少儿搏击",
        contain: "",
        teacher: "牛超甲",
        text: "介绍"
    }, {
        project: "少儿搏击",
        contain: "",
        teacher: "牛超甲",
        text: "介绍"
    }, {
        project: "少儿搏击",
        contain: "",
        teacher: "牛超甲",
        text: "介绍"
    }, ];

    Teacher: string = "";
    Introduce: string = "";

    constructor() {}

    ngOnInit() {}

    GetDetail(item, e): void {
        this.Teacher = item.teacher;
        this.Introduce = item.text;

        let items:NodeListOf<Element> = document.querySelectorAll(".item");

		for(let _item of items){
			_item.className = "item";
		}

        e.target.className += " choosen";
    }
}
