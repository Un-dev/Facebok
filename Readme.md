# Facebok

This is just a suuuuper simple api made during a cybersecurity course as a final project, 
it is supposed to be ultra vulnerable against any attack in a first time then i'll have to explain where are the vulnerabilities and eventually correct them on another branch.

There are 2 branches, master, with security vulnerabilities explained and secured with vulnerabilities resolved.

The api in itself is really basic. Written in express, it requests its data from a MongoCloud cluster of mine through the mongoose framework, it only has one Entity, Users and few actions :

* ```GET /``` : responds with the api auto-generated docs, the vulnerabilities are documented under the @todo tag
* ```GET /CIDT``` : responds with my CIDT objectives
* ```GET /users/``` : responds with all users in the DB
* ```GET /users/:id``` : responds with the corresponding user
* ```DELETE /users/:id``` : deletes the user
* ```POST /users``` : creates a user *(master branch only)*
* ```GET /users/me/:token``` : responds with all user information if authenticated *(secured branch only)*
* ```POST /signup``` : creates a user with and encrypts the pwd with bcrypt *(secured branch only)*
* ```POST /signin``` : responds with an authent token *(secured branch only)*

## Installation

### Method 1 (no installation required)

If you have docker installed and running, you just have to run (faster, should always work but might not be fully up to date):

```
docker pull sgttabouret/facebok:latest
or
docker pull sgttabouret/facebok:secured
```
then
```
docker container run --rm -p 8000:8000 sgttabouret/facebok:latest
or
docker container run --rm -p 8000:8000 sgttabouret/facebok:secured
```

### Method 2 (still no installation required)

or you can build and run it on your own machine !

```
git clone https://github.com/Un-dev/Facebok.git
cd Facebok
docker build -t facebok:latest .
docker container run --rm -p 8000:8000 facebok:latest
```

## Code Organization

### Files 

* The entrypoint of the app is the ```index.js``` file

* ```./models``` contains the models that mongoose will retrieve and, the role of models is to tell javascript what the mongo objects are supposed to look like

* ```./mongo``` contains a script that connects the api to mongoCloud

* ```./routes``` contains the routes of the api

### Security Packages

* [helmet](https://www.npmjs.com/package/helmet)

* [bcrypt](https://www.npmjs.com/package/bcrypt)

* [jsonwebtoken a.k.a. jwt](https://www.npmjs.com/package/jsonwebtoken)

## Others

### Mermaid

The attack area is available here : [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhyb3V0ZXMpXG4gIEUnIC0tPiBEJyhHRVQgL3VzZXJzL2lkKVxuICBFJyAtLT4gRicoR0VUIC91c2VycylcbiAgRScgLS0-IEcnKFBPU1QgL3VzZXJzLzppZClcbiAgRCAtLT4gRShFeHByZXNzL01vbmdvb3NlKVxuICBFIC0tPiBGKGFjdHVhbCBjb2RlKSBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhyb3V0ZXMpXG4gIEUnIC0tPiBEJyhHRVQgL3VzZXJzL2lkKVxuICBFJyAtLT4gRicoR0VUIC91c2VycylcbiAgRScgLS0-IEcnKFBPU1QgL3VzZXJzLzppZClcbiAgRCAtLT4gRShFeHByZXNzL01vbmdvb3NlKVxuICBFIC0tPiBGKGFjdHVhbCBjb2RlKSBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

### CIDT

My CIDT objectives are available [here](https://github.com/Un-dev/Facebok/blob/master/CIDT.md) or at [localhost:8000/CIDT](localhost:8000/CIDT) if you are running the app.
