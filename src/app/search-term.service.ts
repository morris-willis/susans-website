import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchTermService {
  searchTerm: string = ""
  update(searchTerm: string){
    this.searchTerm = searchTerm
  }

}
