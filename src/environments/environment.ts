// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: 'AIzaSyD2MNCNE0LB_UzeDk7ZhmYie7oaTHNxS1Q',
    authDomain: 'crochet-auth.firebaseapp.com',
    databaseURL: 'https://crochet-auth.firebaseio.com',
    projectId: 'crochet-auth',
    storageBucket: 'crochet-auth.appspot.com',
    messagingSenderId: '1060785006393',
    appId: '1:1060785006393:web:e614f95e13642f1df92ae8',
    measurementId: 'G-CS85FKNG7D',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
