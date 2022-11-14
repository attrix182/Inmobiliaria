import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageCompressService } from 'ngx-image-compress';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    PublicModule,
    PrivateModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
