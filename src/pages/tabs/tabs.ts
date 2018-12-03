import { Component,ViewChild } from '@angular/core'; 
import { HomePage } from '../home/home'; 
import { Tabs,ModalController } from 'ionic-angular'; 
import { NavController, NavParams } from 'ionic-angular';// 引入NavParams

@Component({
    templateUrl: 'tabs.html'
  })

export class TabsPage { 
    @ViewChild('mainTabs') tabRef:Tabs;  

    tab1Root: any = HomePage;//为tab标签指定导航至的页面 
    // tab2Root: any = AboutPage; 
    // tab3Root: any = ContactPage; // 指定参数,在tab指向的页面可以读取到该参数 
    homeParams:any = { 
        user1:"admin", 
        user2:"ionic" 
    }; 

    constructor(public modalCtrl: ModalController) {

     } 
  
    changeTabs = function(){ 
        console.log("tab changed"); }; // 选中tab页后的事件 
        selectFriend(){ 
            // 声明一个modal 
            // let modal = this.modalCtrl.create(ContactPage); 
            // 弹出modal 
            // modal.present(); 
        } 
        ionViewDidEnter(){ 
            let mainTabs = this.tabRef; 
            mainTabs.select(1); 
        } 
}