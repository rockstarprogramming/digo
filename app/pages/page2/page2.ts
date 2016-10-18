import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  gender: string = "m";
location: string = "boulder";
skillLevel: { title: string, subTitle: string};

constructor() {
  this.skillLevel = {
    title: 'Skill Level',
    subTitle: 'Select your level'
  };
}

skillSelect() {
  console.log('Skill Selected');
  }
}
