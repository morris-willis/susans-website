import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchTermService } from '../search-term.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() search!: string
  setSearchTerm(searchTerm: string): Observable<null> {
    this.searchTermService.update(searchTerm)
    return of ()
  }
  constructor(private searchTermService: SearchTermService){}
}
