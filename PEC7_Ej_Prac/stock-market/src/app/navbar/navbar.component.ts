import { Component, EventEmitter, Output } from '@angular/core';
import { UserStoreService } from '../services/user-store.service';
import { User } from '../user/User';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() opcionSeleccionada = new EventEmitter<string>();

  constructor(public userStoreService: UserStoreService){}

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada.emit(opcion);
  }
  

}
