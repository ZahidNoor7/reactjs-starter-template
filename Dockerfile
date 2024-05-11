# Use Node.js 20 as the base image
# FROM node:20-alpine3.19
FROM node:18.17.0-alpine3.18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port React will run on (default is 3000)
EXPOSE 3000

# Serve the React app
CMD ["npm", "start"]
