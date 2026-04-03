FROM ohif/app:v3.9.2

USER root

COPY app-config.js /usr/share/nginx/html/app-config.js
COPY index.html /usr/share/nginx/html/index.html