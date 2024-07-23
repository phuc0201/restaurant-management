import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/models/account/account.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
  isLoading: boolean = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  setOfCheckedId = new Set<string>();
  listOfAccountForSearch: Account[] = [];
  listOfAccount: Account[] = [];
  searchValue: string = '';
  loadAccount() {
    this.isLoading = true;
    setTimeout(() => {
      this.accountService.getListAccount().subscribe({
        next: (data) => {
          this.listOfAccount = data;
          this.listOfAccountForSearch = data;
        }
      });
      this.isLoading = false;
    }, 500);
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  onCurrentPageDataChange($event: readonly Account[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  search(name: string) {
    setTimeout(() => {
      this.listOfAccountForSearch = this.listOfAccount.filter(acc => this.normalizeString(acc.full_name.toLowerCase()).includes(this.normalizeString(name.toLowerCase())));
    }, 500);
  }

  changeAccountStatus(acc: Account) {
    this.accountService.changeAccountStatua(!acc.verified, acc._id).subscribe();
    acc.verified = !acc.verified;
  }


  ngOnInit(): void {
    this.loadAccount();
  }


  constructor(
    private accountService: AccountService
  ) { }
}
