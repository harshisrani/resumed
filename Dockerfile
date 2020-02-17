FROM node:11.6.0-alpine AS builder
COPY . ./angular-resume
WORKDIR /angular-resume
RUN npm install
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /angular-resume/dist/angular-resume/ /usr/share/nginx/html