FROM alpine:3.15.4

ARG NGINX=nginx-1.21.6

RUN apk --update add build-base pcre-dev openssl-dev zlib-dev

COPY $NGINX.tar.gz $NGINX.tar.gz
RUN tar -vxf $NGINX.tar.gz && cd $NGINX && \
  CC=/usr/bin/gcc ./configure \
    --sbin-path=/usr/local/sbin/nginx \
    --with-http_ssl_module \
    --with-http_stub_status_module \
    --with-http_dav_module && \
  make && make install

EXPOSE 443

#CMD ["nginx", "-g", "daemon off;"]
