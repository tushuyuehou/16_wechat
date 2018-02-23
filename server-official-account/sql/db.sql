DROP DATABASE IF EXISTS wechat;
CREATE DATABASE wechat CHARACTER SET utf8;

DROP TABLE IF EXISTS wechat.chat;
CREATE TABLE wechat.chat(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id PK',
    question TEXT NOT NULL COMMENT '问题',
    answer TEXT NOT NULL COMMENT '回答'
)COMMENT '聊天表';

INSERT INTO wechat.chat VALUE(NULL, '你好', '您好！');
INSERT INTO wechat.chat VALUE(NULL, '你是谁？', '我是聊天机器人');
INSERT INTO wechat.chat VALUE(NULL, '再见', '再见！');

SELECT *
FROM wechat.chat;