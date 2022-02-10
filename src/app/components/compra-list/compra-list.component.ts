import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/interfaces/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: Compra[] =[];

  constructor(private compraService: CompraService) { }

  ngOnInit(){
    this.getCompras();
  }

  getCompras(){
    this.compraService.getCompras()
    .subscribe(
      res => {
        this.compras=res;
      },
      err => console.log(err)
      )
  }

  deleteCompra(id:any){
    this.compraService.deleteCompra(id)
    .subscribe(
      res =>{
        this.getCompras();
      },
      err => console.log(err)
    )
  }
  add(){}
}
