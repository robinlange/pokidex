# Verwende ein ARM-kompatibles Node-Image für den Build-Prozess
FROM arm64v8/node:14 AS build
WORKDIR /home/app
COPY . /home/app

# Installiere die Abhängigkeiten und baue die Anwendung
RUN npm install
RUN npm run build --prod

# Verwende ein ARM-kompatibles Nginx-Image für den Laufzeitcontainer
FROM arm64v8/nginx:alpine

# Kopiere die angepasste Nginx-Konfiguration
COPY nginx.conf /etc/nginx/nginx.conf

# Kopiere die gebauten Dateien
COPY --from=build /home/app/dist/pokidex-frontend /usr/share/nginx/html

# Exponiere den Port
EXPOSE 80

# Starte Nginx
CMD ["nginx", "-g", "daemon off;"]
