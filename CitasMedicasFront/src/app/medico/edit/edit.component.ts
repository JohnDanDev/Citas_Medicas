import { Component, OnInit} from '@angular/core';
import { MedicoService } from '../medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Medico } from '../medico';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  id_medico!: number;
  medico!: Medico;
  form!: FormGroup;

  constructor(
    public medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.id_medico = this.route.snapshot.params['idMedico'];
    this.medicoService.find(this.id_medico).subscribe((data: Medico) =>{
      this.medico=data;
    });

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      amaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      usuario: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.medicoService.update(this.id_medico, this.form.value).subscribe(res => {
      console.log('Medico updated successfully!');
      this.router.navigateByUrl('medico/index');
    })
  }
}
