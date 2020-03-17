import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JiraService } from '../jira.service';
import { SpecmateSettings } from '../jira.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  specmate_url = '';

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
    var specmateSettings = this.jiraService.loadSpecmateSettings();
    this.specmate_url = specmateSettings.getUrl();
  }

  onClickMe() {
    var specmateSettings = new SpecmateSettings(this.specmate_url);
    this.jiraService.saveSpecmateSettings(specmateSettings);
  }
}