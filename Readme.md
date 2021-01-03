# Facebok

This is just a suuuuper simple api made during a cybersecurity course as a final project

## Installation

### Method 1 (no install required)

If you have docker installed and running, you just have to run :

```
docker run
```

or you can build and run it on your own machine !

```
git clone https://github.com/Un-dev/Facebok.git
cd Facebok
docker build -t facebok:latest .
docker container run --rm -p 5000:5000 facebok:latest
```

## Code Organization

* The entrypoint of the app is the ```index.js``` file

* ```./models``` contains the models that mongoose will retrieve and, the role of models is to tell javascript what the mongo bject are supposed to look like

* ```./mongo``` contains a script that connects the api to mongoCloud

* ```./routes``` contains the routes of the api

## Others

### Mermaid

The attack area is available here : [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhHRVQgL3VzZXJzKVxuICBEIC0tPiBGJyhHRVQgL3VzZXJzL2lkKVxuICBEIC0tPiBFKEV4cHJlc3MvTW9uZ29vc2UpXG4gIEUgLS0-IEYoYWN0dWFsIGNvZGUpIFxuXG5cdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgWltHb29nbGUgU2VydmVyc10gLS0-IFkobW9uZ29DbG91ZClcbiAgWSAtLT4gWChBdGxhcyBzZXJ2aWNlcylcbiAgWCAtLT4gVyhTaGFyZWQgQ2x1c3RlcilcbiAgVyAtLT4gVihNb25nb0RCKVxuXG4gIEFbT1NdIC0tPiBCKFdpbmRvd3MvTWFjT3MvTGludXgpXG4gIEIgLS0-IEMoZG9ja2VyKVxuICBDIC0tPiBEW1JFU1QtQVBJXVxuICBEIC0tPiBFJyhHRVQgL3VzZXJzKVxuICBEIC0tPiBGJyhHRVQgL3VzZXJzL2lkKVxuICBEIC0tPiBFKEV4cHJlc3MvTW9uZ29vc2UpXG4gIEUgLS0-IEYoYWN0dWFsIGNvZGUpIFxuXG5cdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)