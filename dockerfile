# Imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu código
COPY . .

# Expone el puerto (ajústalo si tu app usa otro)
EXPOSE 3000

# Comando para iniciar tu app
CMD ["node", "app.js"]

