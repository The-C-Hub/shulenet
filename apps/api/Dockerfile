#Build the application
FROM node:18-alpine AS build
WORKDIR /app
COPY ./apps/api/ .
RUN yarn install && \
    # yarn run test && \
    # yarn run test:e2e && \
    yarn build
# Stage 2: Run the application
FROM node:18-alpine
WORKDIR /app
# Copy only necessary files from the build stage
COPY --from=build /app/package.json /app/yarn.lock ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/.env ./.env
RUN yarn install --production
CMD ["yarn", "run" , "start:prod"]
EXPOSE 8080