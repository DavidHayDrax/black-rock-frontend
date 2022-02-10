import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from 'src/app/interfaces/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html',
  styleUrls: ['./trabajador-form.component.css']
})
export class TrabajadorFormComponent implements OnInit {
  trabajador: Trabajador = {
    nombre:'',
    apellido: '',
    cargo: '',
    dni: 0,
    imageURL:''
  };

  edit: boolean = false;

  constructor(private trabajadorService: TrabajadorService,
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

    trabajadores: Trabajador[] =[];
    
  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    console.log(params);
    if(params){
      this.trabajadorService.getTrabajador(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.trabajador=res;
          this.edit=true;
        }
      )
    }
  }

  submitWorker(){
    this.trabajadorService.createTrabajador(this.trabajador)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/trabajador']);
    },
      err => console.log(err)
    )
  }

  updateWorker() {
    this.trabajadorService.updateTrabajador(this.trabajador._id,this.trabajador)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/trabajador']);
    },
      err => console.log(err)
    )
  }

}
