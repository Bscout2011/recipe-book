import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRountingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRountingModule,
    HttpClientModule,
    // RecipesModule,
    SharedModule,
    // ShoppingListModule,  
    CoreModule,
    // AuthModule,  // do not import lazy loaded module
  ],
  providers: [
    // LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
