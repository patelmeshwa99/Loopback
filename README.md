# Loopback
Loopback, angular, mongodb

# Loopback installation
Node needs to be installed as prerequisite
npm install -g loopback-cli
If any issues faced when triggering the next command, just install version 4.0.0
npm install -f loopback-cli@4.0.0

# Create project 
Use below mentioned command after navigating to the place where you wanna create project
lb
It will ask a few questions: application name, directory, version of loopback, etc.

# Suggested next steps:
Go to main directory
lb model => to create pojos/models

# Run app from main folder/root folder
node .

# Install bower
npm install bower

# Bower vs npm
=> NPM started with management of node.js modules, however, it can support dependency management of front-end by combining with Browserify/Webpack
=> Bower is just for dependency management of front-end
=> Bower includes styles. In npm, styles needs to be downloaded separately. For e.g., npm-sass
=> NPM can handle nested dependencies. Bower just handles flat dependencies

# Create bower file
.bowerrc
Mention the directory where you want to install the dependencies via bower. Here, its client/lib
Also, angular-resource contains angular with all other imp libs

# Create models
lb model
Follow up questinons: Name, DB model?, Model's base class (PersistedModel, AccessToken, ACL, etc), property name, type, required/not?, default value, folder where you want to create the json files of the mode, etc/
Based on your inputs the json file will be created under the folder that you mentioned

# To make all the apis available to the angular project
This will create the APIs that we can see on explorer
npm install -g strongloop
lb-ng server/server.js client/js/lb-services.js
As and when you create models, make sure that you are u

# Use the lbServices
For that, import the script file (in which you will code) in html. Also import the lb-services.js without which, one won't be able to use it in app.js (the file where you will code)

# Note
Make sure the angular is loaded before angular-resource in html

# Authentication
lb acl
Authentication for accessing APIs
This will ask the model whose APIs need to be authenticated, for all the methods?, what permissions to be given?, what about unauthenticated user?, deny? partial access?
This will update its json file and add acls array.
Now, this is how the flow needs to be executed => create a user => use login api with the same creds => this will generate an access token that now we can use to access the APIs

# Loopback connector mongodb
npm install loopback-connector-mongodb --save

# Create datasource
lb datasource mongoDS -- connector mongoDB
datasource: mongoDS
connector
connection string
host
port
user
password
database name
Now, when you run the app, data will be directly stored to DB instead
