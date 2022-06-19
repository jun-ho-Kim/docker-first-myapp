FROM node:14.14.0-alpine
WORKDIR /app

#RUN rm -rf ./node_modules

COPY ./package.json ./
COPY prisma ./prisma/
RUN npm install -g npm@8.11.0
RUN npm install

RUN npx prisma
#RUN npx prisma init
#RUN npx prisma db pull
RUN npx prisma generate

EXPOSE 3000

COPY . .
CMD ["npm", "start"]
#RUN npm start

#FROM httpd
#EXPOSE 6000 
##COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app /usr/local/apache2/htdocs/
