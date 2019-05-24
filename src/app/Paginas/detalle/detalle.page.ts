import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajoService } from 'src/app/Service/trabajo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  argumentos = null;
  constructor(private activeRoute: ActivatedRoute, private trabajo: TrabajoService) { }
  arryTrabajo: any;
  ngOnInit() {
    this.argumentos = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.argumentos);
    this.trabajo.setDETALLETRABAJOS(this.argumentos).subscribe(
      (data: any ) => {
        this.arryTrabajo = data.recordset;
      });
  }

}
