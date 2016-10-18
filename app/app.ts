import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {provide} from 'angular2/core';
import {Http} from 'angular2/http'
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './services/auth/auth';
import {Type} from 'angular2/core';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    tabbarPlacement: 'bottom'
 },
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }),
    AuthService
  ]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
