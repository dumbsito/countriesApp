import { Component, Input } from '@angular/core';
import { RESTCountry } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
@Input() resultadoHijo:RESTCountry[]=[]
}
