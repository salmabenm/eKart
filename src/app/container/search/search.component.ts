import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1-Create an event (in child component)
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange(){
    this.searchTextChange.emit(this.searchText);
  }
  updateSearchText(event: any){
      this.searchText = event.target.value;
  }
}
