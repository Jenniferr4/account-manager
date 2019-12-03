import {Injectable} from '@angular/core';
import { Account } from '../models';


@Injectable({
    providedIn: 'root'
})

export class AccountService {
    private accounts: Account[] = [
        new Account({
            id:1,
            name: "Jennifer",
            email: "jasmine.g@getMaxListeners.com",
            isEmployee: true,
            departmentId: 4,
            phoneNumbers: []
        }),

        new Account({
            id:2,
            name: "Jennifer",
            email: "jasmine.g@getMaxListeners.com",
            isEmployee: true,
            departmentId: 4,
            phoneNumbers: []
        }),

        new Account({
            id:3,
            name: "Jennifer",
            email: "jasmine.g@getMaxListeners.com",
            isEmployee: true,
            departmentId: 4,
            phoneNumbers: []
        })


    ];

    getAll(): Account[]{
        return this.accounts;
    }

    get(id: number): Account{
        for(let ii = 0, len = this.accounts.length; ii < len; ii++) {
            if(this.accounts[ii].id === id ){
                return this.accounts[ii];
            }
            return null;
        }
    }
}