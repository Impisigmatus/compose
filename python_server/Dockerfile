FROM python:3-alpine

RUN pip3 install http

WORKDIR /var/www/webdav

ENTRYPOINT ["python3", "-m http.server 8080"]
