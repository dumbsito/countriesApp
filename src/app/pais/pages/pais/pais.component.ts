import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
search:string=""
resultado:RESTCountry[]=[]
paisesSugeridos:RESTCountry[]=[]
hayError:boolean=false
contador:number=0
constructor(private servi:PaisService){

}
buscar(search:string){
  this.search=search;
  this.hayError=false
this.servi.buscarPais(this.search).subscribe(data=>{
 console.log(data);
 
this.resultado=data
},error=>{
  this.hayError=true
  this.resultado=[]
})
}

sugerencias(search:string){
  this.hayError=false;

  this.servi.buscarPais(search).subscribe(data=>{
this.paisesSugeridos=data.splice(0,5)
  })
 
  
}

}
