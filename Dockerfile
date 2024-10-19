# api/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy only the package.json and package-lock.json files
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./src ./src

# Expose the port and start the server
EXPOSE 3000
CMD ["npm", "run", "dev"]
