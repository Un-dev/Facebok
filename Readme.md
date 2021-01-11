# Facebok

This is just a suuuuper simple api made during a cybersecurity course as a final project, 
it is supposed to be ultra vulnerable against any attack in a first time then i'll have to explain where are the vulnerabilities and eventually correct them on another branch.

The api in itself is really basic. Written in express, it requests its data from a MongoCloud cluster of mine through the mongoose framework, it only has one Entity, Users and few actions :

* ```GET /users/``` : responds with all users in the DB
* ```GET /users/:id``` : responds with the corresponding user
* ```DELETE /users/:id``` : deletes the user
* ```POST /users```: creates a user


## Installation

### Method 1 (no installation required)

If you have docker installed and running, you just have to run (faster, should always work but might not be fully up to date):

```
docker container run sgttabouret/facebok:latest
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

* The entrypoint of the app is the ```index.js``` file

* ```./models``` contains the models that mongoose will retrieve and, the role of models is to tell javascript what the mongo bject are supposed to look like

* ```./mongo``` contains a script that connects the api to mongoCloud

* ```./routes``` contains the routes of the api

## Others

### Mermaid

The attack area is available here : [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhyb3V0ZXMpXG4gIEUnIC0tPiBEJyhHRVQgL3VzZXJzL2lkKVxuICBFJyAtLT4gRicoR0VUIC91c2VycylcbiAgRScgLS0-IEcnKFBPU1QgL3VzZXJzLzppZClcbiAgRCAtLT4gRShFeHByZXNzL01vbmdvb3NlKVxuICBFIC0tPiBGKGFjdHVhbCBjb2RlKSBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhyb3V0ZXMpXG4gIEUnIC0tPiBEJyhHRVQgL3VzZXJzL2lkKVxuICBFJyAtLT4gRicoR0VUIC91c2VycylcbiAgRScgLS0-IEcnKFBPU1QgL3VzZXJzLzppZClcbiAgRCAtLT4gRShFeHByZXNzL01vbmdvb3NlKVxuICBFIC0tPiBGKGFjdHVhbCBjb2RlKSBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

### CIDT

My CIDT objectives are available [here](https://github.com/Un-dev/Facebok/blob/master/CIDT.md).
