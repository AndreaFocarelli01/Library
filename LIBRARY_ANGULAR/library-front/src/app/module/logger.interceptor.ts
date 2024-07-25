import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  //da cambiare in futuro
  console.log(req.urlWithParams);
  return next(req);
};
