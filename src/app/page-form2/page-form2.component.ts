import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './page-form2.component.html',
  styleUrls: ['./page-form2.component.css']
})
export class PageForm2Component {


  datosForm: FormGroup

  identificador: number = 1;
  comprobador: number = 0;
  title = "Formulario reactivo"
  varNombre  = "Nombre"
  varApellido = "Apellido"
  varDomicilio = "Domicilio"
  varEdad = "Edad"
  datos = "Cargar datos"
  lista= "Listado de usuarios matriculados"
  isError: boolean = false;
  userExiste: boolean = false;

  arrDatos: any [] = [];


  constructor(private form : FormBuilder) {

  this.datosForm = this.form.group({

    'nombre': ['', Validators.required],
    'apellido':['', Validators.required],
    'domicilio':['', Validators.required],
    'edad':['', Validators.required]

  })

}

/** Creo la funcion senData para pintar los datos, me declaro cuatro variables donde voy a guardar
 * los valores que tenga en los input del formulario, luego al array mediante el metodo push le meto los datos y tambien
 * le añado un id que va ser el largo del array incremental (0,1,2..), finalmente actualizo los datos de los input
 * del formulario para dejar los campos en blanco
 */
sendData() {
 

  let name = this.datosForm.value.nombre 
  let subname= this.datosForm.value.apellido
  let adress = this.datosForm.value.domicilio
  let age = this.datosForm.value.edad

  // Compruebo que no esten los campos vacios
  if(name.length == 0 || subname.length == 0 || adress.length == 0 || age == "") {
    this.isError=true;
    return
  }else{
    this.isError=false;
  }

  // si el array no esta vacio , lo recorro para ver si ya existe el nombre y el apellido
  if(this.arrDatos.length != 0 ){
       this.arrDatos.forEach((value) => {
          if(value.nombre.toLowerCase() == name.toLowerCase()  && value.apellido.toLowerCase() == subname.toLowerCase() ){
              this.userExiste=true;
              return
          }else{
            this.userExiste=false
            
          }
        });
  }
  // Sino el usuario no existe lo añado , id aumenta en 1
  if(!this.userExiste){
    this.arrDatos.push({ id: this.identificador , nombre: name, apellido: subname, domicilio: adress, edad: age});
    this.datosForm.patchValue({nombre:"",apellido:"",domicilio:"",edad:""})
    this.identificador= this.identificador + 1
  }

}
eliminar(id:number){

  this.arrDatos = this.arrDatos.filter(d => d.id != id)
}
modificar(id:number, name:string, apellido:string, domicilio:string, edad:number){

  this.datosForm.patchValue({id:id,nombre:name,apellido:apellido,domicilio:domicilio,edad:edad})

}
actualizar(id:number){
  let number = id -1;
  let name = this.datosForm.value.nombre 
  let subname= this.datosForm.value.apellido
  let adress = this.datosForm.value.domicilio
  let age = this.datosForm.value.edad

  if(name.lenght == 0 || subname.lenght == 0 || adress.lenght == 0 || age == "") {
    this.isError=true;
    return
  }else{
    this.isError=false;
  }

  // Actualizo la posicion, sobreescribo la posicion uso el id que me llega por parametro -1 (por que antes puse +1 para no empezar en 0)
  this.arrDatos[number]= ({ id: id, nombre: name, apellido: subname, domicilio: adress, edad: age})
  this.datosForm.patchValue({nombre:"",apellido:"",domicilio:"",edad:""})
  }
}
