import {
    Component,
    AfterContentInit
} from '@angular/core';

@Component({
    selector: 'app-ground',
    templateUrl: './ground.component.html',
    styleUrls: ['./ground.component.css']
})
export class GroundComponent implements AfterContentInit {

    map: any;

    constructor() {}

    ngAfterContentInit() {

        this.map = new AMap.Map('map', {
						resizeEnable:true,
            zoom: 10,
            center: [116.397428, 39.90923]
        });

				let mark = new AMap.Marker({
					icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
					position:[116.373608,40.001252]
				});

				mark.setMap(this.map);

				 // console.log(this.map)
				 this.map.setCity("北京")

    }

}
