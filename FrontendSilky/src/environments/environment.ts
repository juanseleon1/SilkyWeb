// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IP: "http://silky-env.eba-xbmweexs.us-east-1.elasticbeanstalk.com",
  //IP: "http://localhost:8080",
  errorMapper: {
    "0003":"El email ya se encuentra registrado",
    "0004":"El email ya se encuentra registrado",
    "0005":"No existe ningun usuario registrado con ese email",
    "0006":"Los datos ingresados no coinciden",
    "1001":"Aun no hay compras :(",
    "1003":"La compra a consultar no se encuentra disponible",
    "2001":"No se hay ningun producto disponible",
    "2003": "El producto a consultar no se encuentra disponible",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
