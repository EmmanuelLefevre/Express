# ArtiWave
## INTRODUCTION
ArtiWave is a back-end blogging application developped with Express. It uses MongoDB as well as the Mongoose ORM.
It has JWT authentication and allows you to perform CRUD operations on articles depending on your role.
## INSTALLATION
### 1. Local
#### Database
- Install MongoDb Community Server as a service.  
[MongoDb Community Server download](https://www.mongodb.com/try/download/community)
- Install Mongosh Shell.  
[MongoDb Shell download](https://www.mongodb.com/try/download/shell)
- Install MongoDb Compass.  
[MongoDb Compass download](https://www.mongodb.com/try/download/compass)  
- Create database with Mongosh:
```shell
mongosh
```
```shell
use artiwave
```
```shell
db.createCollection("users")
```
```shell
db.createCollection("articles")
```
[MongoDb create a database documentation](https://www.mongodb.com/docs/manual/core/databases-and-collections/)
- Create an authentication
```shell
mongosh
```
```shell
use artiwave
```
```shell
db.createUser({ user: "Admin", pwd: "nimda", roles: [{ role: "readWrite", db: "artiwave" }] })
```
[MongoDb create a user documentation](https://www.mongodb.com/docs/manual/tutorial/create-users/)
- Connexion to database
##### 1. Connexion with Mongosh:
```shell
db.auth("Admin","nimda")
```
##### 2. Or connexion with MongoDb VsCode extension:
![Connexion MongoDb VsCode extension step 1](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/mongodb_vscode_extension_connexion_step_1.png)  
![Connexion MongoDb VsCode extension step 2](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/mongodb_vscode_extension_connexion_step_2.png)
***
#### Clone and install project
```shell
git clone
```
```shell
nvm install 20.10.0
```
```shell
npm install
```
#### Generate keys for JWT
```shell
cd api
```
```shell
mkdircd _certs
```
```shell
openssl genrsa -out pvt.pem 4096
```
```shell
openssl rsa -in pvt.pem -outform PEM -pubout -out pbl.pem
```
#### Check private key
```shell
openssl rsa -check -in _certs/pvt.pem
```
#### Load fixtures
```shell
make lf
```
#### Launch server
If NVM is locally installed on your computer and you're not confident that you're on the required Node v20.10.0 LTS you could execute this command line =>
```shell
nvm use 20.10.0
```
Or check your version with =>
```shell
node -v
```
Then you could launch server with makefile =>
```shell
make dev
```
Otherwise with NPM
```shell
npm run dev
```
#### Swagger doc
```
localhost:9001/api/swagger-doc
```
#### Launch tests
```shell
npm run test
```
#### Launch tests coverage
```shell
npm run test:cov
```
## SONARQUBE ANALYSIS
##### 1. First give rights to the sonar-server.sh file:
```shell
chmod u+x sonar-server.sh
```
##### 2. Start the server after opening docker desktop:
```shell
./sonar-server.sh
```
##### 3. Open a browser and open the URL => http://localhost:9000
##### 4. Enter credentials Login: admin and Password: admin
##### 5. Set a new password...
![SonarQube update password](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/sonarqube_update_password.png)
##### 6. Create new project manually
ProjectKey = ArtiWave
##### 7. Generate a token
![SonarQube generate token](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/sonarqube_generate_token.png)
##### 8. Get the token
![SonarQube get token](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/sonarqube_get_token.png)
##### 9. Provide the token in ArtiWave project
Replace token by the created one in scan.sh file
![ArtiWave provide token](https://github.com/EmmanuelLefevre/MarkdownImg/blob/main/artiwave_provide_token.png)
##### 10. Give rights to the scan.sh file
```shell
chmod u+x scan.sh
```
##### 11. Launch SonarQube tests
```shell
./scan.sh
```

