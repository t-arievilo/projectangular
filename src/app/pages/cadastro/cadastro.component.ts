import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Funcionario";

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }
}
