DROP DATABASE IF EXISTS `question`;

CREATE DATABASE `question`;

USE `question`;

DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`(
	`mid` int(11) unsigned not null auto_increment comment '主键',
	`name` varchar(40) not null default '' comment '账号',
	`pass` varchar(50) not null default '' comment '密码',
	`create_time` int(11) unsigned not null default '0' comment '创建时间',
	`update_time` int(11) unsigned not null default '0' comment '修改时间',
	primary key (`mid`)
) engine=innodb default charset=utf8;
