import { Injectable } from '@angular/core';
import { ParseService } from '../parse/parse.service'

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(private parse:ParseService) { 
    this.parse.parseInitialize();
  }

  hello(){
    return this.parse.parseCloudFunction("hello",null);
  }

  listAllPatients(){
    return this.parse.parseCloudFunction("retrievePatientRecordsAll", null);
  }

  listPatientsByOrganization(organization){
    return this.parse.parseCloudFunction("retrievePatientRecordByOrgnization", {
      organization: organization
    });

  }

}
