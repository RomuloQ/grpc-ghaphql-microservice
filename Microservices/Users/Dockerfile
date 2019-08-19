FROM node:8.11.2

WORKDIR /var/www

# Copia o codigo da aplicacao para o diretorio atual do container /var/www.
COPY . .

# instala ferramenta para rodar o node pelo docker
RUN npm install -g pm2 \
  && npm i -g typescript \
  && npm install \
  && tsc -p tsconfig.json

# Expose porta 80
EXPOSE 80

CMD ["pm2-docker", "build/App.js"]