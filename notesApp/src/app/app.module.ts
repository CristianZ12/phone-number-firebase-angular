import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './Modules/app-module/app-module.module';
import { ListNotesComponent } from './Components/list-notes/list-notes.component';
import { NavigationAppComponent } from './Components/navigation-app/navigation-app.component';
import { HomeAppComponent } from './Components/home-app/home-app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { ProductServiceService } from './Services/product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    NavigationAppComponent,
    HomeAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [ ProductServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
