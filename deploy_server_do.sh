#! /bin/bash
yarn build:server
heroku container:push --app=calm-citadel-25445 web
heroku container:release --app=calm-citadel-25445 web