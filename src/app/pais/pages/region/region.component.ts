import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones=["Africa","Americas","Asia","Europe","Oceania"]
  regionActive:string=""
  resultado:RESTCountry[]=[]
  activarRegion(region:string){
    if(region==this.regionActive){
      return
    }
    this.regionActive=region
    this.resultado=[]
  }

  constructor(private servi:PaisService){

  }

  buscar(region:string){

    this.servi.buscarRegion(region).subscribe(data=>{
     console.log(data);
      
     this.resultado=data
    })
}
}