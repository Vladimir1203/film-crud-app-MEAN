# Stage 1: Build Angular App
FROM node:14 as build

# Set the working directory
WORKDIR /usr/src/app/angular-client

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN ng build


# Stage 2: Create Nginx Server Image
FROM nginx:alpine

# Copy the built Angular app from the build stage to the nginx server directory
COPY --from=build /usr/src/app/angular-client/dist/angular-14-crud-example /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
