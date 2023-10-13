import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
 @Input()
 all:number=0;
 @Input()
 inStock:number=0;
 @Input()
 outOfstock:number=0;

 @Output()
 selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();//instance pour changer le btn selectionner
 selectedFilterRadioButton: string = 'all';//lavariable qui prend la valeur de chaque btn

 onselectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
 }

}
