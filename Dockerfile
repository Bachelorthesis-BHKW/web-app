FROM node:16 AS build
WORKDIR /srv
COPY . .
RUN npm ci
RUN npm run build

FROM httpd:latest
COPY --from=build /srv/dist/web-app /usr/local/apache2/htdocs/
COPY apache/.htaccess /usr/local/apache2/htdocs/
