FROM alpine:latest

ARG NGINX=nginx-1.21.6
ENV CC=gcc

RUN apk update && apk add gcc

COPY $NGINX.tar.gz $NGINX.tar.gz
RUN tar -vxf $NGINX.tar.gz && cd $NGINX && \
  ./configure --sbin-path=/usr/sbin --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --pid-path=/var/run/nginx.pid \
    --lock-path=/var/lock/nginx.lock \
    --http-log-path=/var/log/nginx/access.log \
    --http-client-body-temp-path=/var/lib/nginx/body \
    --http-proxy-temp-path=/var/lib/nginx/proxy \
    --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-http_dav_module && \
  make && make install
