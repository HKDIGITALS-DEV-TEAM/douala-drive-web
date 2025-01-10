# Dockerfile - Client React
# Utilisation de l'image officielle Node.js
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application pour production
RUN npm run build

# Utilisation de l'image officielle Nginx pour servir l'application
FROM nginx:stable-alpine

# Copier les fichiers construits dans le répertoire Nginx par défaut
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exposer le port (par exemple, 80)
EXPOSE 5022

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]
