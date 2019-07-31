# AngularDebug
Angular Debug

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

[Firebase](https://firebase.google.com/docs/)

[Firebase CLI](https://firebase.google.com/docs/cli/)

[AnguarFire](https://github.com/angular/angularfire2)

[cwdj parallax directive](https://cwadrupldijjit.com/cwdj-parallax)

## Install the Angular CLI

```
npm install -g @angular/cli
```

## Install Firebase Tools

```
npm install -g firebase-tools  
```
## Generate Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### Angular CLI Command

```
ng new c-of-christ-thornton --routing --style scss --skip-install --skip-git
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
ng generate service services/auth
```

### Add Firebase hosting

Add the needed packages

```
npm install firebase @angular/fire --save
```

### Import the Angular Fire libraries

Modify app.module.ts to import the Firebase libraries. Add import for environment

```
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
    //  https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyBjvm0xzeAhwBPi1zCymkXHF_PVi_BqQlQ'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
```

Modify environment.ts and environment.prod.ts and add the firebase credentials.

environment.ts:
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBHCD55UuNnhDnqkuC947Exyjp-MQLY-WU',
    authDomain: 'cofchristthorntonproduction.firebaseapp.com',
    databaseURL: 'https://cofchristthorntonproduction.firebaseio.com',
    projectId: 'cofchristthorntonproduction',
    storageBucket: 'cofchristthorntonproduction.appspot.com',
    messagingSenderId: '275389555781',
    appId: '1:275389555781:web:c07b56017aa4f157'
  }
};
```

environment.prod.ts

```
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyBHCD55UuNnhDnqkuC947Exyjp-MQLY-WU',
    authDomain: 'cofchristthorntonproduction.firebaseapp.com',
    databaseURL: 'https://cofchristthorntonproduction.firebaseio.com',
    projectId: 'cofchristthorntonproduction',
    storageBucket: 'cofchristthorntonproduction.appspot.com',
    messagingSenderId: '275389555781',
    appId: '1:275389555781:web:c07b56017aa4f157'
  }
};
```

### Setup Firebase

```
firebase login
? Allow Firebase to collect anonymous CLI usage and error reporting information? (Y/n) Y

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=...

Waiting for authentication...

Select the google account and then Authorize it for firebase

+  Success! Logged in as wpbest@gmail.com

firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/william.best/Documents/GitHub/ng8bulmatemplate

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. 
 ◯ Database: Deploy Firebase Realtime Database Rules
❯◉ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
 ◉ Storage: Deploy Cloud Storage security rules


? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. Firestore: Deploy rules and create indexes for Firestore, Functions: Configure and deploy Cloud Functions, Hosting: Configure a
nd deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: 
❯ cofchristthorntonproduction (CofChristThorntonProduction) 

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? (firestore.rules) 

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? (firestore.indexes.json) 


=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? 
  JavaScript 
❯ TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? (Y/n) Y

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/tslint.json
✔  Wrote functions/tsconfig.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? (Y/n) Y

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Y
✔  Wrote dist/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? (storage.rules)

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

Modify package.json and add "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz" in the "dependencies" section.
```
  "dependencies": {
    ...
    "zone.js": "~0.9.1",
    "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz"
  },
```

## Install Angular Google Maps

```
npm install @agm/core --save
```

## Install charts.js

```
npm install chart.js --save
```

## Install hammerjs

```
npm install hammerjs --save
```

## Install screenfull

```
npm install screenfull --save
```

## Install easy-pie-chart

```
npm install easy-pie-chart --save
```

## Add Font Awesome Common Packages

```
npm install @fortawesome/fontawesome-free --save
```

## Add SEO (Search Engine optimization)

Create the file robots.txt to the src folder and create the text

```
User-agent: *
Allow: /
```

Create the file sitemap.xml to the src folder and create the text:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://cofchristthorntonproduction.firebaseapp.com/</loc>
      <lastmod>2019-07-27</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```

Add the meta data in the ```<head>``` section in the intex.html file in the src folder:

```
  <link rel="canonical" href="https://CofChristThornton.org/" />
  <meta name="description" content="Community Of Christ Thornton. We proclaim Jesus Christ and promote communities of joy, hope, love, add peace. Christ's mission is our mission.">
```

Modify package.json and add "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz" in the "dependencies" section.
```
  "dependencies": {
    ...
    "zone.js": "~0.9.1",
    "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz"
  },
```

## Install jarallax

```
npm install jarallax --save
```

Modify polyills.ts add this line at the top of the file

```
(window as any).global = window; 
```

IE10 and IE11 requires the following for NgClass support on SVG elements

```
npm install classlist.js --save 
```

Web Animations `@angular/platform-browser/animations`
Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).

```
npm install web-animations-js --save 
```

Modify angular.json to add the following:

```
{
  "projects": {
    "c-of-christ-thornton": {
...      
     "arch itect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
...
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/robots.txt",
              "src/sitemap.xml"              
            ],
            "styles": [
              "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
              "node_modules/ng-uikit-pro-standard/assets/scss/bootstrap/bootstrap.scss",
              "node_modules/ng-uikit-pro-standard/assets/scss/mdb.scss",
              "src/styles.scss"
            ],
            "scripts": [
              "node_modules/chart.js/dist/Chart.js",
              "node_modules/easy-pie-chart/dist/easypiechart.js",
              "node_modules/screenfull/dist/screenfull.js",
              "node_modules/hammerjs/hammer.min.js",
            ]
...
          }
        }
      }
    }
  }
}  
```

Modify src/styles.scss and add the following:



## Install Node Packages

```
npn install
```

### Install NPM Check Update (NCU) and Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

As of today (07-27-2019), Angular only supports TypeScript version 3.4.3. Modify package.json and set the typescript version to 3.4.3.

```
"typescript": "~3.4.3"
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Production Build

```
ng build --prod
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy Firebase

Deploy only hosting 

```
firebase deploy --only hosting
```

Deploy only fuctions

```
firebase deploy --only functions
```

Deploy Everything

```
firebase deploy
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

