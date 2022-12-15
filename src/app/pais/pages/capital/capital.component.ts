import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  search:string=""
  resultado:RESTCountry[]=[]
  hayError:boolean=false
  contador:number=0
  constructor(private servi:PaisService){
  
  }
  buscar(search:string){
    this.search=search;
    this.hayError=false
  this.servi.buscarCapital(this.search).subscribe(data=>{
   console.log(data);
   
  this.resultado=data
  },error=>{
    this.hayError=true
    this.resultado=[]
  })
  }
  
  sugerencias(search:string){
    this.hayError=false;
  }
  }

