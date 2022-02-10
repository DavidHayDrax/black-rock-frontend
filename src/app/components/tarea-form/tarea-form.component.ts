import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  tarea: Tarea = {
    name: '',
    description: '',
    fechaDeInicio: '',
    fechaDeTermino: '',
    activo: true
  };

  edit: boolean = false;

  constructor(private tareaService: TareaService,
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

    tareas: Tarea[] =[];
    
  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    console.log(params);
    if(params){
      this.tareaService.getTarea(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.tarea=res;
          this.edit=true;
        }
      )
    }
  }

  submitTarea(){
    this.tareaService.createTarea(this.tarea)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/tarea']);
    },
      err => console.log(err)
    )
  }

  updateTarea() {
    this.tareaService.updateTarea(this.tarea._id,this.tarea)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/tarea']);
    },
      err => console.log(err)
    )
  }


}
