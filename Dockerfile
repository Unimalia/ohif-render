FROM ohif/viewer:latest

USER root

COPY app-config.js /usr/share/nginx/html/app-config.js
COPY app-config.js /usr/share/nginx/html/config/app-config.js
COPY app-config.js /usr/share/nginx/html/platform/viewer/app-config.js

RUN echo "=== ROOT ===" && ls -R /usr/share/nginx/html || true
RUN echo "=== /usr/share/nginx/html/app-config.js ===" && cat /usr/share/nginx/html/app-config.js || true
RUN echo "=== /usr/share/nginx/html/config/app-config.js ===" && cat /usr/share/nginx/html/config/app-config.js || true
RUN echo "=== /usr/share/nginx/html/platform/viewer/app-config.js ===" && cat /usr/share/nginx/html/platform/viewer/app-config.js || true