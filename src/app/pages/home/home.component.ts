import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioGeral: Funcionario[] = [];

  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Acoes', 'Excluir'];

  constructor(private funcionarioService: FuncionarioService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;
      console.log(dados);

      dados.map((item) =>{
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      })

      this.funcionarios = data.dados;
      this.funcionarioGeral = data.dados;
    });
  }

  search(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionarioGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  } 

  OpenDialog(id: number) {
    this.dialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    });
  }
}
