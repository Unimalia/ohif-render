FROM ohif/viewer:latest

USER root

RUN rm -f /usr/share/nginx/html/config/default.js
COPY app-config.js /usr/share/nginx/html/config/default.js

RUN echo "=== CONFIG USATO DA OHIF ===" && cat /usr/share/nginx/html/config/default.js || true