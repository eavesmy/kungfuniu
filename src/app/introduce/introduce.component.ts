import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-introduce',
    templateUrl: './introduce.component.html',
    styleUrls: ['./introduce.component.css']
})

export class IntroduceComponent implements OnInit {

    List = [{
            name: "牛超甲",
            img: "",
            title: "功夫牛总教练。",
            describe: `毕业于首都体育学院武术系，习武22年。
			国家一级运动员。
			国家二级裁判员。
			武术段位六段。曾代表中国任职国际武术联合会，担任秘鲁国家武术队主教练，多次代表中国和北京参加孔子学院全球巡回演出，8年教学经验。培养多名学生获得北京市及全国武术比赛冠军。`
        },

        {
            name: "郭志超",
            img: "",
            title: "毕业于北京首都体育学院，国家一级运动员，国家二级裁判员。",
            describe: `毕业于北京首都体育学院，国家一级运动员，国家二级裁判员，武术段位六级。曾任清华大学公管学院太极拳教练，多次担任北京市武术比赛裁判员。2014年第八届华夏南少林武术大赛通臂拳金奖2014年中国大学生武术竞艺大赛金奖;2013年河北省长拳锦标赛亚军;2012年万柳杯武术锦标赛通臂拳冠军;2016年北京国际武术文化节北京国际武术邀请赛优秀裁判员;2015年任北京海淀区体育局武术教练`
        },

        {
            name: "杨韫韬",
            img: "http://oy3lt4glu.bkt.clouddn.com/1910831145.jpg",
            title: "",
            describe: `毕业于少林塔沟武院习武六年，国家武术散打三段，国家二级运动员。曾参军入伍，职业步兵，专业警卫，负责所属单位搏击教员，并负责武汉大学国防生搏击课程，熟悉部队系统的教学方式。擅长搏击、散打、自卫防身。`
        },

        {
            name: "葛雨霖",
            img: "",
            title: "",
            describe: `毕业于首都体育学院武术系，习武15年，中国武术散打六段，国家散打二级裁判，跆拳道黑带三段。山东省青岛市跆拳道锦标赛女子冠军，全国大学生空手道锦标赛女子个人冠军。曾任海淀区外国语实验学校跆拳道教练，中关村第四小学空手道教练，育翔小学空手道教练，北京邮电大学跆拳道教练。
			2007年-2008年蝉联三年山东省青岛市跆拳道锦标赛女子47KG/52KG/52KG第一名
			2009年-2012年蝉联三年北京市青少年武术散打女子48KG/52KG/58KG第一名
			2014年全国大学生空手道锦标赛女子个人组手53KG第一名`
        },

        {
            name: "贺沛錩",
            img: "",
            title: "",
            describe: `毕业于山西体育职业学院民族传统系， 习武15年   国家散打二级裁判员，武术段位四段，国家二级运动员，山西省临汾市武术散打锦标赛56kg冠军。擅长武术套路，搏击。`
        },

        {
            name: "李明",
            img: "http://oy3lt4glu.bkt.clouddn.com/1814509224.jpg",
            title: "",
            describe: ``
        }
    ];

    constructor() {}

    ngOnInit() {
        console.log("Fuck");
    }

}
