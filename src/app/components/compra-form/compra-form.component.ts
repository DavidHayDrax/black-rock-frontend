import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/interfaces/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.css']
})
export class CompraFormComponent implements OnInit {

  compra: Compra = {
    producto: '',
    precio: 0,
    fecha: '',
    trabajador: '',
    factura: '',
    ruc: '',
    imageURL: ''
  };

  edit: boolean = false;

  constructor(private compraService: CompraService,
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

    compras: Compra[] =[];
    
  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    console.log(params);
    if(params){
      this.compraService.getCompra(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.compra=res;
          this.edit=true;
        }
      )
    }
  }

  submitCompra(){
    this.compraService.createCompra(this.compra)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/compra']);
    },
      err => console.log(err)
    )
  }

  updateCompra() {
    this.compraService.updateCompra(this.compra._id,this.compra)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/compra']);
    },
      err => console.log(err)
    )
  }
}
