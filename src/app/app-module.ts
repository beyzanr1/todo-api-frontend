import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './shared/sidebar/sidebar';
import { Topbar } from './shared/topbar/topbar';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    App,
    Sidebar,
    Topbar
  ],
  
  imports: [
    LayoutModule,
      BrowserModule,
        MatToolbarModule,
  AppRoutingModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
