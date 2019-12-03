import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accounts.service';
import { Account } from '../models';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  private accountService = new AccountService();

  accounts: Account[];
  ngOnInit(){
    this.accounts = this.accountService.getAll();
  }

}
