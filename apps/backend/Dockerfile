# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app/monorepo/apps/backend

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# COPY prisma ./prisma
# RUN npx prisma generate

# Copy the .env and .env.development files
COPY .env ./

# Creates a "dist" folder with the production build
RUN npx prisma generate
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3001

# Start the server using the production build
CMD ["npm", "run", "start"]
# CMD ["echo", "Container started successfully. Check npm run start for the actual application."]