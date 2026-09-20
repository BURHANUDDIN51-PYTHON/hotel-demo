FROM node:22-alpine

WORKDIR /app

# Copy package definition files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build production assets
RUN npm run build

# Expose Vite preview port
EXPOSE 4173

# Serve the built application using npm run preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]