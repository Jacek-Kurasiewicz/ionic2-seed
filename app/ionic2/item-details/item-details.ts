import {IonicApp, Page, NavController, NavParams} from "ionic/ionic";

import "./item-details.scss";

@Page({
  templateUrl: "./ionic2/item-details/item-details.html"
})
export class ItemDetailsPage {
  private selectedItem;
  
  constructor(app: IonicApp, private nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");
  }
}
