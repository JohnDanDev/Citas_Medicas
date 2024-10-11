import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Medico } from '../medico';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  medicos: Medico[] = [];

  constructor(public medicoService: MedicoService){}

  ngOnInit(): void {
    this.medicoService.getAll().subscribe((data: Medico[])=>{
      this.medicos = data;
      console.log(this.medicos);
    })
  }

  deleteMedico(id_medico: any){
    this.medicoService.delete(id_medico).subscribe(res =>{
      this.medicos = this.medicos.filter(item=>item.id_medico !== id_medico);
      console.log('Medico deleted successfully!');
    })
  }
}
