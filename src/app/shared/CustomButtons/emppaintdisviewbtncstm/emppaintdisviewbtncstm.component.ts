import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emppaintdisviewbtncstm',
  templateUrl: './emppaintdisviewbtncstm.component.html',
  styleUrls: ['./emppaintdisviewbtncstm.component.scss']
})
export class EmppaintdisviewbtncstmComponent implements OnInit {

  data:any;
  wfName:any;

  constructor() { }

  ngOnInit() {
    this.wfName = "EmployeePaintDiscount";
  }

  agInit(params){
    this.data = params.value;
  }
  
  viewFullAplication(item) {
    //alert("the items are: "+item);
    var Url = ""; 
    //=========for production environment =========
    Url = window.location.origin + "/leaveauto/SitePages/"+this.wfName+".aspx?UniqueId=" + item + "&mode=read";   
    //========for localhost dev environment ==
    //Url = "https://portaldv.bergerbd.com/leaveauto/SitePages/"+this.wfName+".aspx?UniqueId=" + item + "&mode=read";
    
    var Title = "Request Details";
    window.open(Url, '_blank').focus();
    //this.gridApi.setQuickFilter(this.txtOfQuickSearchInpFld);
  }

}
