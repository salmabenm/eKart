import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  
  //Optional 2nd argument of @ViewChild()
  //1.read: use it to read the different token from the queried elements.
  //2.static: Determines when the query is resolves (,{static: true})
  //          True is when the view is initialized (before the first change detection) for the first time.
  //          False if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputE1: ElementRef; //par reference
  
  onSearchTextChange(){
    
  }
  updateSearchText(){
      //this.searchText = event.target.value;
      //console.log(inputEl.value);
      this.searchText = this.searchInputE1.nativeElement.value;//pour l'accees a la valeur stocker dans template var 
      this.searchTextChange.emit(this.searchText);
  }

}
