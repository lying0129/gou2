import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';// 引入NavParams


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }

}
