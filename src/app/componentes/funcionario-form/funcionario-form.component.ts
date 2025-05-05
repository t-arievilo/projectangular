import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{
  @Output()  onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;

  constructor() { }
  
  ngOnInit(): void {

    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome :'', [Validators.required]),
      departamentoEnum: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamentoEnum :'', [Validators.required]),
      turnoEnum: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turnoEnum :'', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),

  });
}

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
