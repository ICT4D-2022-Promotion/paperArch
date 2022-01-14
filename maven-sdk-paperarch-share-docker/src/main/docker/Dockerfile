FROM ${docker.share.image}:V3.4.0.x-latest
# FROM ${docker.share.image}:${alfresco.share.version}

ARG TOMCAT_DIR=/usr/local/tomcat

# Copy Dockerfile to avoid an error if no JARs exist
COPY Dockerfile extensions/*.jar $TOMCAT_DIR/webapps/share/WEB-INF/lib/

# Copy Dockerfile to avoid an error if no AMPs exist
COPY Dockerfile extensions/*.amp $TOMCAT_DIR/amps_share/
RUN java -jar $TOMCAT_DIR/alfresco-mmt/alfresco-mmt*.jar install \
              $TOMCAT_DIR/amps_share $TOMCAT_DIR/webapps/share -directory -nobackup -force
COPY alfresco-governance-services-community-share-3.4.0.1-SNAPSHOT.amp $TOMCAT_DIR/amps_share/

COPY share-config-custom.xml $TOMCAT_DIR/shared/classes/alfresco/web-extension

COPY log4j.properties $TOMCAT_DIR/webapps/share/WEB-INF/classes
COPY hotswap-agent.properties $TOMCAT_DIR/webapps/share/WEB-INF/classes


# Show the docker container names
#   docker ps --format "{{.Names}}"
# connect to docker container
#   docker exec -t -i docker_maven-sdk-paperarch-postgres_1 /bin/bash
# connect to database as user alfresco
#   psql -U alfresco
# show alfresco tables
#   \dt
