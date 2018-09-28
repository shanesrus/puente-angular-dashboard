import { Component, OnInit } from '@angular/core';
import { QueriesService} from '../../services/queries/queries.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  listOfAllIDs = [];
  arrayOfMatchEnvFiles = [];
  numberOfIds = 0;
  numberofMatchingIds;

  constructor(private query:QueriesService) { 
    this.setup();
    
  }

  ngOnInit() {
    
  }

  setup() {
    this.query.listAllPatients().then((results)=>{
      for(let i=0; i<results.length; i++){
        let result = results[i]
        //console.log(result.id)
        this.listOfAllIDs.push(result.id)
        this.numberOfIds +=1;
      }

      this.query.containedQuery(2000,'HistoryEnvironmentalHealth','client',this.listOfAllIDs).then((results)=>{
        this.arrayOfMatchEnvFiles = results;
        this.numberofMatchingIds = results.length;
        //console.log(this.arrayOfMatchEnvFiles)
      })


    })
      
    
  }



 
}
