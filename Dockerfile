FROM ohif/app:v3.9.2

USER root

COPY app-config.js /usr/share/nginx/html/app-config.js
RUN sed -i 's|</head>|<script src="/app-config.js"></script></head>|g' /usr/share/nginx/html/index.html