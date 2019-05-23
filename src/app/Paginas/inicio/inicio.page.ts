import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario = {
    email: '',
    pass: '',
  };
  personaData: any;
  argumentos = null;
  constructor(private persona: PersonaService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumentos = this.activeRoute.snapshot.paramMap.get('id');
  }

}
