import {
    Component,
	AfterContentInit
} from '@angular/core';

@Component({
    selector: 'app-ground',
    templateUrl: './ground.component.html',
    styleUrls: ['./ground.component.css']
})
export class GroundComponent implements  AfterContentInit{
	
	map:any;
    constructor() {}

    ngAfterContentInit() {
        this.map = AMap.Map('map', {
            zoom: 11,
            center: [116.397428, 39.90923]
        });

    }

}
