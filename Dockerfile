FROM ohif/app:v3.9.2

ENV APP_CONFIG=config/default.js

COPY app-config.js /usr/share/nginx/html/config/default.js