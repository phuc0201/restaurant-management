import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
const config: SocketIoConfig = { url: '', options: {} };

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#00b14f'
  }
};

const plugins = [

];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CoreModule,
    SocketIoModule.forRoot(config),
    HttpClientModule
  ],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideNzI18n(en_US)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
