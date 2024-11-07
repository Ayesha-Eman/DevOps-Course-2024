# Math Game in Docker

This project is a simple Node.js math game, containerized using Docker.

## Files
- `index.js`: The main game logic.
- `package.json`: Project information and dependencies.
- `Dockerfile`: Docker configuration file.

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
