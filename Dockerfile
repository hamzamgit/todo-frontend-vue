FROM node:12.2.0-alpine as build
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install @vue/cli@3.7.0 -g
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
