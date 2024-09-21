import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  inputType: string="button";
  inputType1: string="checkbox";
  name: string="Palak";
  selected: string='';

  showWelcome(){
    alert("Welcome")
  }
  showMessage(msg:string){
    alert(msg);
  }
}
