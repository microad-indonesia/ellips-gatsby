# Use node 12.8 docker image with debian strech slim variant
FROM node:12.22-slim

# Expose port 7002
EXPOSE 7002

# Change working directory
WORKDIR /home/node/app/

# Installing Gatsby CLI 3.14
RUN npm install -g gatsby-cli@3.14

# Copy package.json for installing node modules
COPY package.json /home/node/app/package.json

# Install node modules
RUN npm install

# Copy all files
COPY . /home/node/app/.

# Entrypoint that will run everytime this image spawned
ENTRYPOINT gatsby serve -H 0.0.0.0 -p 7002

