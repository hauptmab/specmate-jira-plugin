import { Injectable } from '@angular/core';

@Injectable()
export class JiraService {

  constructor() { }

  public loadSpecmateSettings() : SpecmateSettings {
    alert("loading specmate settings");
    return new SpecmateSettings("http ... bla");
  }

  public saveSpecmateSettings(specmateSettings : SpecmateSettings) {
    alert("saving specmtate seetings. muhahah " + specmateSettings.getUrl());
  } 
}

export class SpecmateSettings {

  constructor(url : string) {
    this.url = url;
   }

  url: string;

  getUrl() : string{
    return this.url;
  }
}