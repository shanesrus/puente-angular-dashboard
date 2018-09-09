import { Component, OnInit } from '@angular/core';
import { QueriesService } from '../services/queries/queries.service';
import { Parse } from 'parse'

@Component({
  selector: 'app-dataexport-proto',
  templateUrl: './dataexport-proto.component.html',
  styleUrls: ['./dataexport-proto.component.css']
})
export class DataexportProtoComponent implements OnInit {
  private parseAppId: string = 'vBdTHqQU31IyLW5uYRDIWb8Ew8zCZGBzMqChugjr';
  private parseJavascriptKey: string = 'jFWiqliNRHXiH72J9kiotL8m0EuSdry1yFIiYlad';
  private parseServerUrl: string = 'https://parseapi.back4app.com/';

  dataArray = [];

  constructor(public query:QueriesService) { 
    this.setup().then(()=>{
      console.log(query.hello());
    });
  }

  ngOnInit() {
  }


  setup(){
    return this.query.listAllPatients().then((results) => {
      for (var i = 0; i < results.length; i++){
        var data = results[i];
        
        //Pushes objects into An Array 
        this.dataArray.push(data.attributes);
        
        //Returns each object as results is being iterated
        //console.log(data.attributes);
      }
      //Returns Array of Objects
      //document.write(JSON.stringify(this.dataArray));
      //console.log(dataArray);
      
    });
  }

}
