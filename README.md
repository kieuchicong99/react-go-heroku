# command use

heroku login
heroku create go-react-heroku
heroku stack:set container
heroku container:push web
heroku config:set PORT=8080
heroku container:release web
