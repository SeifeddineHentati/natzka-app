FROM node:18.18.1-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent --production

COPY . ./

RUN npm run build

FROM nginx:alpine as prod

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /usr/share/nginx/html

EXPOSE 3000

# start app
CMD ["nginx", "-g","daemon off;"]