FROM ohif/app:v3.9.2

COPY app-config.js /usr/share/nginx/html/app-config.js

ENV APP_CONFIG=/usr/share/nginx/html/app-config.js