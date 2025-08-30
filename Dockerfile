FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    cron \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

WORKDIR /app

COPY index.js package.json /app/
COPY public /app/public
COPY uploads /app/uploads
COPY uptime_check.py /app/uptime_check.py
COPY crontab /etc/cron.d/ctf-cron

RUN chmod 0644 /etc/cron.d/ctf-cron && \
    crontab /etc/cron.d/ctf-cron && \
    chmod +x /app/uptime_check.py

RUN npm install

EXPOSE 1337

CMD service cron start && node index.js
