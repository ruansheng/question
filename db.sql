DROP DATABASE IF EXISTS `question`;

CREATE DATABASE `question`;

USE `question`;

DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`(
	`mid` int(11) unsigned not null auto_increment comment '主键',
	primary key (`mid`)
) engine=innodb default charset=utf8;
