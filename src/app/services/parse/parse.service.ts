import { Injectable } from '@angular/core';
import { Parse } from 'parse'

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  
  private parseAppId: string = 'vBdTHqQU31IyLW5uYRDIWb8Ew8zCZGBzMqChugjr';
  private parseJavascriptKey: string = 'jFWiqliNRHXiH72J9kiotL8m0EuSdry1yFIiYlad';
  private parseServerUrl: string = 'https://parseapi.back4app.com/';
  /*
  private parseAppId: string = 'myAppId';
  private parseJavascriptKey: string = '';
  private parseServerUrl: string = 'http://localhost:1337/parse';
  */
  constructor() { 

  }

  parseInitialize() {
    Parse.initialize(this.parseAppId, this.parseJavascriptKey);
    Parse.serverURL = this.parseServerUrl;
  }

  parseEnvironment() {
    return Parse;
  }

  parseCloudFunction(functionName:string, functionRequest:any){
    return Parse.Cloud.run(functionName,functionRequest);
  }
}
