# Usar la imagen base de Ubuntu con XFCE y VNC
FROM consol/ubuntu-xfce-vnc:latest

# Establecer variables de entorno para evitar interacciones durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Instalar curl, nodejs, sqlite3 y otros paquetes necesarios
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release sqlite3 sudo && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY . /app

# Instalar las dependencias de Node.js
RUN npm install

# Exponer el puerto para Electron (si es necesario)
EXPOSE 3000

# Ejecutar la aplicación
CMD ["npm", "start"]
