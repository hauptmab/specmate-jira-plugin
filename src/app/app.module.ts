import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SettingsComponent } from './settings/settings.component';
import { JiraService } from './jira.service';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'bla',
    redirectTo: '/settings',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, HelloComponent, SettingsComponent, MainComponent ],
  bootstrap:    [ AppComponent ],
  providers: [JiraService]
})
export class AppModule { }
