import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utilss/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeService {

  constructor() { }

  codeError(code: string) {
    switch (code) {
      //el correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      //cuando es contrasenia debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';

      //cuando el correo es invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo invalido';

      //contrasenia incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';

      //si el usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
