import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/interfaces/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css']
})
export class TrabajadorListComponent implements OnInit {

  trabajadores: Trabajador[] =[];

  constructor(private trabajadorService: TrabajadorService) { }

  ngOnInit(){
    this.getTrabajadores();
  }

  getTrabajadores(){
    this.trabajadorService.getTrabajadores()
    .subscribe(
      res => {
        this.trabajadores=res;
      },
      err => console.log(err)
      )
  }

  deleteTrabajador(id:any){
    this.trabajadorService.deleteTrabajador(id)
    .subscribe(
      res =>{
        this.getTrabajadores();
      },
      err => console.log(err)
    )
  }
  add(){}

}
