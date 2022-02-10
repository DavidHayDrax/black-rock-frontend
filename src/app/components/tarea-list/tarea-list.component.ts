import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {

  tareas: Tarea[] =[];

  constructor(private tareaService: TareaService) { }

  ngOnInit(){
    this.getTareas();
  }

  getTareas(){
    this.tareaService.getTareas()
    .subscribe(
      res => {
        this.tareas=res;
      },
      err => console.log(err)
      )
  }

  deleteTarea(id:any){
    this.tareaService.deleteTarea(id)
    .subscribe(
      res =>{
        this.getTareas();
      },
      err => console.log(err)
    )
  }
}
