create database dockerfirstmyapp;

use dockerfirstmyapp;

CREATE TABLE do_visitorbook (
  id INT unique AUTO_INCREMENT,
  `text` varchar(100) not null
);