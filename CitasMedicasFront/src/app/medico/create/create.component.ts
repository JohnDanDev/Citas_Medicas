import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public medicoService: MedicoService,
    private router: Router

  ){
    this.form = this.fb.group({
      
    })
  }

  ngOnInit(): void {

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

  onSubmit(){
    console.log(this.form.value);
    this.medicoService.create(this.form.value).subscribe(res =>{
      console.log('Medico created successfully!');
      this.router.navigateByUrl('medico/index');
    })
  }

}
