<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Nest Ecommerce Backend

## Description

This project is a Nest backend for an ecommerce application. It provides an API with features such as file uploading, product and category management, authentication and authorization, as well as WebSocket integration. The project also includes Docker configuration using Docker Compose and Dockerfile.

## Features

- File Upload: Allows users to upload files to the server, such as product images.

- Product and Category Management: Provides endpoints for creating, reading, updating, and deleting products and categories.

- Authentication and Authorization: Implements user authentication and authorization for accessing endpoints using JSON Web Tokens (JWT).

- WebSockets: Includes real-time communication functionality using WebSockets to notify clients about product updates, orders, etc.

- Database Seed: Includes a special endpoint to populate the PostgreSQL database with sample data.

## Docker Configuration

The project is configured to be used with Docker. The following configuration files are included:

- `Dockerfile`: Defines how to build the Docker image for the Nest backend.

- `docker-compose.yml`: Configures the necessary services to run the backend, including the PostgreSQL database.

## Getting Started

To run the project with Docker, follow these steps:

1. Make sure you have Docker installed on your machine.

2. Clone this repository.

3. Open a terminal and navigate to the project directory.

4. Run the following command to build the Docker image:

```bash
$ docker-compose -f docker-compose.prod.yaml up --build
```
```bash
$ docker-compose -f docker-compose.prod.yaml up -d
```