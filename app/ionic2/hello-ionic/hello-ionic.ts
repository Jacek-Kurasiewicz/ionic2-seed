import {Page, NavController} from "ionic/ionic";

import "./hello-ionic.scss";

@Page({
  templateUrl: "./ionic2/hello-ionic/hello-ionic.html"
})
export class HelloIonicPage {
  private nav;
  
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
