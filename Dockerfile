FROM ohif/viewer:latest

USER root

RUN mkdir -p /usr/share/nginx/html/config
RUN mkdir -p /usr/share/nginx/html/platform/viewer

COPY app-config.js /usr/share/nginx/html/app-config.js
COPY app-config.js /usr/share/nginx/html/config/default.js
COPY app-config.js /usr/share/nginx/html/config/app-config.js
COPY app-config.js /usr/share/nginx/html/platform/viewer/app-config.js

RUN echo "=== /usr/share/nginx/html/app-config.js ===" && cat /usr/share/nginx/html/app-config.js || true
RUN echo "=== /usr/share/nginx/html/config/default.js ===" && cat /usr/share/nginx/html/config/default.js || true
RUN echo "=== /usr/share/nginx/html/config/app-config.js ===" && cat /usr/share/nginx/html/config/app-config.js || true
RUN echo "=== /usr/share/nginx/html/platform/viewer/app-config.js ===" && cat /usr/share/nginx/html/platform/viewer/app-config.js || true