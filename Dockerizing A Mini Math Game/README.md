# Math Game in Docker

This project is a simple Node.js math game, containerized using Docker.

## Files
- `index.js`: The main game logic.
- `package.json`: Project information and dependencies.
- `Dockerfile`: Docker configuration file.
  # Dockerfile Explanation

This `Dockerfile` is used to build a Docker image for a simple Node.js application. Below is a line-by-line explanation of each instruction in the Dockerfile.

## Dockerfile Contents

```dockerfile
# Use the official Node.js image from Docker Hub
FROM node:14

# Create a directory in the container for the app
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN npm install

# Copy the rest of the application files
COPY . /app

# Specify the command to run the application
CMD ["npm", "start"]
```
## Dockerfile 
- FROM: Sets the base image to build upon.
- WORKDIR: Sets the working directory within the container.
- COPY: Copies files from the local machine into the container.
- RUN: Executes commands to set up the environment, such as installing dependencies.
- CMD: Defines the default command to run when the container starts.
## How to Run the Project

### 1. Build the Docker Image

Run this command to build the Docker image:
```bash
docker build -t math-game .
```
### 2. Run the Docker Container
Run this command to start the game:

```bash
docker run -it math-game
```
### 3.How to Play
The game will start inside the container. Answer the math questions by typing in your answers. Type exit to quit the game.

This guide walks you through setting up and containerizing a simple Node.js application using Docker.
