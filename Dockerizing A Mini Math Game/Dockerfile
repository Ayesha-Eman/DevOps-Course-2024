# Use the official Node.js image from Docker Hub
FROM node:14-alpine

# Create a directory in the container for the app
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN npm install

# Copy the rest of the application files
COPY . /app

# Specify the command to run the application
CMD ["npm", "start"]
