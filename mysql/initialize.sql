DROP DATABASE IF EXISTS docker_app

create database docker_app;

use docker_app;

CREATE TABLE do_visitorbook (
  id INT unique AUTO_INCREMENT,
  text varchar(100) not null
);