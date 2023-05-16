import { Component } from '@angular/core';

@Component({
  templateUrl: './page-form1.component.html',
  styleUrls: ['./page-form1.component.css']
})

export class PageForm1Component {

  visible: boolean = false;
  varNombre="Nombre"
  varApellido="Apellido"
  varTelefono= "Telefono"
  title ="Formulario plantilla"
  usuarios = "Nombre de usuarios inscriptos"
  identificador: number= 1;

  // Creo mi array de objetos donde despues le voy a dar valor dinamicamente

  myDatos = [{
    id: this.identificador,
    nombre: "Federico",
    apellido: "Ruiz",
    telefono:"622953678"
  }]

  // Funcion para añadir los valores del input

  addUser(name:any, subname:any, phone:any){
    this.identificador= this.identificador + 1
    this.visible=true;
    this.myDatos.push({id:this.identificador, nombre:name, apellido:subname, telefono:phone})

  }

  eliminar(id:number){
    this.myDatos = this.myDatos.filter(d => d.id != id)
  }
}
