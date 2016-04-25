# Schema Information

## affinities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null



## beasts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null, unique
description | string    | not null
avg_height  | integer   |
avg_weight  | integer   |
avg_length  | integer   |
affinity_id | integer   | not null, foreign key (references affinities), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
beast_id    | integer   | not null, foreign key (references beasts), indexed
rating      | integer   | not null
title       | string    |
description | string    | not null

## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
beast_id    | integer   | not null, foreign key (references beasts), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
