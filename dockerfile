# Imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias de producción
RUN npm install --production

# Copia el resto de tu código al contenedor
COPY . .

# Establece las variables de entorno necesarias (opcional)
ENV NODE_ENV=production

# Expone el puerto que utiliza tu aplicación
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "app.js"]