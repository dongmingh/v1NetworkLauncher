import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NetworkService } from './app.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

securityTypes = [
    {name: '256', value: '256'}
  ];

ordererTypes = [
      {name: 'kafka', value: 'kafka'},
      {name: 'solo', value: 'solo'}
    ];

ledgerTypes = [
    {name: 'goleveldb', value: 'goleveldb'}
  ];

hashTypes = [
      {name: 'SHA2', value: 'SHA2'}
    ];

result = {};

public launchForm = this.fb.group({
    ledgerType: ["goleveldb", Validators.required],
    profileString: ["testOrg", Validators.required],
    hashType: ["SHA2", Validators.required],
    numberOfKafka: ["1", Validators.required],
    numberOfChannels: ["1", Validators.required],
    numberOfOrderers: ["1", Validators.required],
    numberOfPeersPerOrganization: ["1", Validators.required],
    numberOfOrganizations: ["1", Validators.required],
    securityType: ["256", Validators.required],
    ordererType: ["solo", Validators.required],
    cryptoDirectory: ["$GOPATH/src/github.com/hyperledger/fabric/common/tools/cryptogen", Validators.required],
    hostIp: ["0.0.0.0", Validators.required],
    localMSP: ["$GOPATH/src/github.com/hyperledger/fabric/common/tools/cryptogen/crypto-config", Validators.required],
    srcMSP: ["/opt/hyperledger/fabric/msp/crypto-config", Validators.required]
  });
  constructor(public fb: FormBuilder,
    private networkService: NetworkService,
    public dialog: MdDialog) {}

  launch () {
    this.networkService.launch(this.launchForm.value)
       .subscribe((data) => {
          console.log(data);
          this.dialog.open(ConfirmationDialog);
       });
  }
}

@Component({
  selector: 'confirmation-dialog',
  template: '<div>Network is launching...</div>'
})
export class ConfirmationDialog {}
