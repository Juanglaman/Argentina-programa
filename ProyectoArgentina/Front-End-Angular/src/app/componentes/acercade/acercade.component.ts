import { Component, OnInit } from '@angular/core';
import { ControladorPersona } from 'src/app/controlador-persona';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  ControladorPersona = new ControladorPersona();

  constructor() { }

  ngOnInit(): void {
  }

}
