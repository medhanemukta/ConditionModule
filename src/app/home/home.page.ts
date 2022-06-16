/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  problemList:any;
  constructor() {
    this.problemList=[
      {"conditionsid":44583,"conditionsdescription":"Trochanteric bursitis","icdversion":10,"icdcode":"M70.60","icddescription":"Trochanteric bursitis, unspecified hip","snomedcode":"7674000","snomeddescription":"7674000 - Trochanteric bursitis","conditionstatus":"2","dtresolveddate":-2208988800000,"npatientid":"7-81d9-eb6b51a3d58e","dtonsetdate":1646730575000,"practitionerid":null,"tenantid":"0fa1a208-bf72-11eb-81d9-eb6b51a3d58e","immediacy":"3","modifieddate":1646730575000,"problemtypesnomedcode":"55607006","reasonsnomedcode":"","reasonsnomeddescription":"","resolvedcomments":"","visitid":"128880427969718380-81d9-eb6b51a3d58e","dtdaterecorded":1646710815776,"conditionstatusdescription":"Active","externalref":{'emrid':'761932650353350639'}},
      {"conditionsid":44582,"conditionsdescription":"Chronic crepitant synovitis of hand and wrist","icdversion":10,"icdcode":"M70.049","icddescription":"Crepitant synovitis (acute) (chronic), unspecified hand","snomedcode":"202925003","snomeddescription":"202925003 - Chronic crepitant synovitis of hand and wrist","conditionstatus":"2","dtresolveddate":-2208988800000,"npatientid":"7-81d9-eb6b51a3d58e","dtonsetdate":1646730093000,"practitionerid":null,"tenantid":"0fa1a208-bf72-11eb-81d9-eb6b51a3d58e","immediacy":"3","modifieddate":1646697600000,"problemtypesnomedcode":"55607006","reasonsnomedcode":"","reasonsnomeddescription":"","resolvedcomments":"","visitid":"128880427969718380-81d9-eb6b51a3d58e","dtdaterecorded":1646710483450,"conditionstatusdescription":"Active","externalref":{"emrid":'220030627088849669'}},
      {"conditionsid":44581,"conditionsdescription":"Crepitant synovitis (acute) (chronic), right hand","icdversion":10,"icdcode":"M70.041","icddescription":"Crepitant synovitis (acute) (chronic), right hand","snomedcode":"","snomeddescription":"","conditionstatus":"2","dtresolveddate":-2208988800000,"npatientid":"7-81d9-eb6b51a3d58e","dtonsetdate":1646729940000,"practitionerid":null,"tenantid":"0fa1a208-bf72-11eb-81d9-eb6b51a3d58e","immediacy":"3","modifieddate":1646697600000,"problemtypesnomedcode":"55607006","reasonsnomedcode":"","reasonsnomeddescription":"","resolvedcomments":"","visitid":"128880427969718380-81d9-eb6b51a3d58e","dtdaterecorded":1646710215534,"conditionstatusdescription":"Active","externalref":{'emrid':'273030878864386356'}}]
  }

}
