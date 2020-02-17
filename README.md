# Angular Resume

This is an resume in Angular and allow recruiters or other business partner to contact the job seeker at the `Contact Me` page or asking some basic question via the chatbot.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

You are welcome to download the project and build you wonderful resume with Angular. Please contact me personally for the adjustment of various part for your resume.

## Production Hosting
Hosting server should have included following application:
i. NodeJS
ii. Git
iii. Apache
iv. Docker (for Option 2 only)

The production version can be built and hosted by either one method:

**Option 1 Setting `dist` folder as Document Root of Virtual Host**
```
i. Add following virtual host configuration in `/etc/httpd/conf/httpd.conf`
```
```
<VirtualHost *:80>
    DocumentRoot /var/www/Angular_Resume/dist/angular-cv
    ServerName your.domainname.com
</VirtualHost>
```
```
ii. Execute following script to get the source code and start the environment.
```
```
cd /var/www
sudo git clone https://github.com/cavourpoon/Angular_Resume.git
sudo npm install
sudo npm run build 
```

**Option 2 Building the docker image and run**
```
i. Add following virtual host configuration in `/etc/httpd/conf/httpd.conf`
```
```
<VirtualHost *:80>
    ServerName your.domainname.com
    ProxyPass / http://localhost:<<AvailablePortNumber>>/
    ProxyPassReverse / http://localhost:<<AvailablePortNumber>>/
    ProxyRequests off
    AllowEncodedSlashes NoDecode
<Proxy *>
    Order allow,deny
    Allow from all
</Proxy>
</VirtualHost>
```
```
ii. Executing following commands
```
```
sudo git clone https://github.com/cavourpoon/Angular_Resume.git
cd ./Angular_Resume
sudo docker build -t angular-resume .
sudo docker run -d -p <<AvailablePortNumber>>:80 --name angular-resume angular-resume
```

# Introduction of Angular Application
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).