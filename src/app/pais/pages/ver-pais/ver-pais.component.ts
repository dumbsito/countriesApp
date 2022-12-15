import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RESTCountry } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  datos!:any;
 constructor(private route:ActivatedRoute,private servi:PaisService){

 }

 ngOnInit(): void {
  this.route.params
  .pipe(
    switchMap(({id})=>this.servi.buscarPorId(id)),
    tap(console.log)
  )
   .subscribe(data=>this.datos=data)
  
  }
  mostrar(){
    console.log(this.datos);
    
}
}
