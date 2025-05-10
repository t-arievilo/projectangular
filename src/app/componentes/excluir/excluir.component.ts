import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  
  inputdata: any;
  funcionario!: Funcionario;

  constructor( private funcionarioService: FuncionarioService, 
               private router: Router,
               @Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<ExcluirComponent> ) { }

  ngOnInit(): void {
    this.inputdata = this.data;

    this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe((data) => {
      this.funcionario = data.dados;
    });
  }

  Excluir () {
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }
}
