FROM mysql:5.7.15

ENV MYSQL_DATABASE=docker_app
ENV MYSQL_ROOT_PASSWORD=123

ADD ./my.cnf /etc/mysql/conf.d/my.cnf
#ADD ./initialize.sql /docker-entrypoint-initdb.d

EXPOSE 3306