import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions} from '@ionic-native/themeable-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qOY4KhXNBfM");

  constructor(public navCtrl: NavController, 
        private iab: InAppBrowser,  
        public sanitizer: DomSanitizer,
        private tb: ThemeableBrowser) {

  }

  openUrl(){
    let options2: InAppBrowserOptions = {
      location: "yes",toolbarposition:"top"
    }
    const browser = this.iab.create('https://ionicframework.com/', '_blank', options2);
    //browser.insertCSS({ code: 'body{font-size: 105px;}'})

    const options: ThemeableBrowserOptions = {
     statusbar: {
         color: '#AAA',
     },
     toolbar: {
         height: 50,
         color: '#f0f0f0ff'
     },
     title: {
         color: '#003264ff',
         showPageTitle: false
     },
     backButton: {
         image: 'back',
         imagePressed: 'back_pressed',
         align: 'left',
         event: 'backPressed'
     },
    //  forwardButton: {
    //      image: 'forward',
    //      imagePressed: 'forward_pressed',
    //      align: 'left',
    //      event: 'forwardPressed'
    //  },
    //  closeButton: {
    //      image: 'close',
    //      imagePressed: 'close_pressed',
    //      align: 'left',
    //      event: 'closePressed'
    //  },
    //  customButtons: [
    //      {
    //          image: 'share',
    //          imagePressed: 'share_pressed',
    //          align: 'right',
    //          event: 'sharePressed'
    //      }
    //  ],
    //  menu: {
    //      image: 'menu',
    //      imagePressed: 'menu_pressed',
    //      title: 'Test',
    //      cancel: 'Cancel',
    //      align: 'right',
    //      items: [
    //          {
    //              event: 'helloPressed',
    //              label: 'Hello World!'
    //          },
    //          {
    //              event: 'testPressed',
    //              label: 'Test!'
    //          }
    //      ]
    //  },
     backButtonCanClose: true

  };

  //const browser: ThemeableBrowserObject = this.tb.create('https://ionic.io', '_blank', options);
    

  }
}
