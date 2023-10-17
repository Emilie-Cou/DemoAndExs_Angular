import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const isConnected = sessionStorage.getItem('email'); //Si true, j'ai accès, si False, je passe pas
  if (isConnected) {
    return true;
  } 
  else {
    return false;
  }
};
