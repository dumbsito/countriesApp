import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

@Input() placeholder:string=""


search:string=""

@Output() onEnter:EventEmitter<string>=new EventEmitter();
@Output() onDebounce:EventEmitter<string>=new EventEmitter()

debouncer:Subject<string>=new Subject()

teclaPresionada(){
this.debouncer.next(this.search)
}

buscar(){
this.onEnter.emit(this.search)
}

ngOnInit(): void {
  this.debouncer.pipe(
    debounceTime(300)
  ).subscribe(valor=>
   this.onDebounce.emit(valor)
    
    )
  }

}
