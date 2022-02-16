CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

INSERT INTO application_user (username, password) VALUES ('pedro', crypt('admin', 'my_salt'))

INSERT INTO application_user (username, password) VALUES ('joao', crypt('guest', 'my_guest'))

INSERT INTO application_user (username, password) VALUES ('chaves', crypt('admin', 'my_other_admin'))