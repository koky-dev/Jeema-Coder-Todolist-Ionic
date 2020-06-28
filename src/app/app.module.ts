import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDM82W3Wu2JrMpvYAKbu53HaiEMBFpWr_s",
  authDomain: "jeema-coder-ionic-todolist-app.firebaseapp.com",
  databaseURL: "https://jeema-coder-ionic-todolist-app.firebaseio.com",
  projectId: "jeema-coder-ionic-todolist-app",
  storageBucket: "jeema-coder-ionic-todolist-app.appspot.com",
  messagingSenderId: "783350772965",
  appId: "1:783350772965:web:db6b42aa8b1d0ea5be500c",
  measurementId: "G-4BLXQL9EXK"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
