# CIDT

## C - Confidentiality

Some data needs to be protected from some eyes, one person's information may be good to hide from another. Authorization and hidden api routes is the way to achieve such level of security.

## I - Integrity

Also, as you may not want your personal informations exposed to the world you may want it not modifiable from people who are not you ! Also these informations need to keep being accurate and complete over time, in the case of this project the informations are kept by an external actor (mongo) which uses, google cloud, dont worry, your secrets will be kept intact. 

## D - Disponibility

The disponibility of the data is also (half-)assured by mongo cloud, as long as both the api and the clouds are up data are available. Express and docker are made to be strong and scalable against attacks. 

## T - Tracability

To keep track of which info comes from and goes where, a solution would be to impletent a log system in a file of the api and have a trace of every call it responds to.