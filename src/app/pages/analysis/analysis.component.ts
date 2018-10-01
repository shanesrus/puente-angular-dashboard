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

  latrineAccessYes = 0;
  latrineAccessNo = 0;

  poorFloorCondition = 0;
  poorRoofCondition = 0;

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

        ///Retrieve Old Data
        if (result.get('latrineAccess') === 'Y'){
          this.latrineAccessYes+=1;
        }
        if (result.get('latrineAccess') === 'N'){
          this.latrineAccessNo+=1;
        }

        if (result.get('conditionoFloorinyourhouse') === 'dirtPoor'){
          this.poorFloorCondition+=1;
        }
        if (result.get('conditionoRoofinyourhouse') === 'poor'){
          this.poorRoofCondition+=1;
        }

      }

      this.query.containedQuery(2000,'HistoryEnvironmentalHealth','client',this.listOfAllIDs).then((results)=>{
        this.arrayOfMatchEnvFiles = results;
        this.numberofMatchingIds = results.length;

        //Retrieve Latrine Access info from migration
        for (let i=0; i<this.arrayOfMatchEnvFiles.length; i++){
          if (this.arrayOfMatchEnvFiles[i].get('latrineAccess') === 'Y'){
            this.latrineAccessYes+=1;
          }
          else if (this.arrayOfMatchEnvFiles[i].get('latrineAccess') === 'N'){
            this.latrineAccessNo+=1;
          }

        }
        for(let i=0; i<this.arrayOfMatchEnvFiles.length; i++){
          if (this.arrayOfMatchEnvFiles[i].get('conditionoFloorinyourhouse') === 'dirtPoor'){
            this.poorFloorCondition+=1;
          }
          if (this.arrayOfMatchEnvFiles[i].get('conditionoRoofinyourhouse') === 'poor'){
            this.poorRoofCondition+=1;
          }
        }
        
        

      })


    })
      
    
  }



 
}
