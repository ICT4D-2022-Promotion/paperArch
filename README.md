# Alfresco maven sdk - paperArch

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Few things to notice](#Few-things-to-notice)
5. [Collaborators](#collaborators)
6. [Todo](#Todo)

***
## General Info
This project named `paperArch` is an electronic archiving system, Thought firstly for the faculty of science of the university of Yaounde I.
This project is designed as part of our licensing project.
For this project, we used alfresco Software Development Kit (generated with maven) what is a fundamental tool provided by Alfresco to developers to build customizations and extensions for the Alfresco Digital Business Platform. 
It is based on Apache Maven and Docker and is compatible with major IDEs. This enables Rapid Application Development (RAD) and Test Driven Development (TDD).

***
## Technologies
  this project is an `All-In-One (AIO)` project, generated from [maven alfresco sdk](https://docs.alfresco.com/content-services/6.0/develop/sdk/), it is principally a `j2ee` project. 
  As it, we will use various technologies as the mains are :
  * `XML`,
  * `java`,
  * `javaScript`,
  * `html`,
  * `ftl`, what is a freeMarker template language

***
## Installation
  ### Preriquest
    Before executing this project, it suppose that you this the following things installed in your computer
  * [maven](https://maven.apache.org/install.html  )
  * [java 11](https://www.oracle.com/java/technologies/downloads/#java11) , the minimal version for this
  * [Docker desktop](https://www.docker.com/get-started/) , if you are using windows 10 or higher version.
  * [Docker and Docker compose](https://docs.docker.com/compose/gettingstarted/) , if your windows version is older than windows 10.

### run the project

  After configuring the environment development as required, you now can run docker or docker desktop to lunch all containers required by alfresco server.
  After this run de server/project with the following commands at the command prompt :
  * `./run.sh build_start` if your are on linux system,
  * `./run.bat build_start` if your are on windows system,

  before that, make sure that you in project directory

  and verify that it

 * Runs Alfresco Content Service (ACS)
 * Runs Alfresco Share
 * Runs Alfresco Search Service (ASS)
 * Runs PostgreSQL database
 * Deploys the JAR assembled modules
 
All the services of the project are now run as docker containers. The run script offers the next tasks:

 * `build_start`. Build the whole project, recreate the ACS and Share docker images, start the dockerised environment composed by ACS, Share, ASS and 
 PostgreSQL and tail the logs of all the containers.
 * `build_start_it_supported`. Build the whole project including dependencies required for IT execution, recreate the ACS and Share docker images, start the 
 dockerised environment composed by ACS, Share, ASS and PostgreSQL and tail the logs of all the containers.
 * `start`. Start the dockerised environment without building the project and tail the logs of all the containers.
 * `stop`. Stop the dockerised environment.
 * `purge`. Stop the dockerised container and delete all the persistent data (docker volumes).
 * `tail`. Tail the logs of all the containers.
 * `reload_share`. Build the Share module, recreate the Share docker image and restart the Share container.
 * `reload_acs`. Build the ACS module, recreate the ACS docker image and restart the ACS container.
 * `build_test`. Build the whole project, recreate the ACS and Share docker images, start the dockerised environment, execute the integration tests from the
 `integration-tests` module and stop the environment.
 * `test`. Execute the integration tests (the environment must be already started).

 `After this completed, your share project is opened at this url (https://localhost:8080)`

## Few things to notice

 * No parent pom
 * No WAR projects, the jars are included in the custom docker images
 * No runner project - the Alfresco environment is now managed through [Docker](https://www.docker.com/)
 * Standard JAR packaging and layout
 * Works seamlessly with Eclipse and IntelliJ IDEA
 * JRebel for hot reloading, JRebel maven plugin for generating rebel.xml [JRebel integration documentation]
 * AMP as an assembly
 * Persistent test data through restart thanks to the use of Docker volumes for ACS, ASS and database data
 * Integration tests module to execute tests against the final environment (dockerised)
 * Resources loaded from META-INF
 * Web Fragment (this includes a sample servlet configured via web fragment)

## Collaborators
  contributers to this project are : 
   * Kenfack L. Aurel Noe : 19M2791
   * Feussi Lassi Joseph : 19K2803

# TODO

  * Abstract assembly into a dependency so we don't have to ship the assembly in the archetype
  * Functional/remote unit tests

"# paperArch" 
