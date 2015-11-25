import {IonicApp, Page, NavController, NavParams} from "ionic/ionic";

import "../components/switch/switch.scss";
import "../components/text-input/text-input.scss";

@Page({
  templateUrl: "./ionic2/toggles/toggles.html"
})
export class TogglesPage {
  private selectedItem;
  
  constructor(app: IonicApp, private nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

  }

}
