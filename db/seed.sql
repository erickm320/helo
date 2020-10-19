create table if not exists 
users(
    user_id serial primary key,
    username varchar(20),
    password varchar(250),
    profile_pic text
);

create table if not exists 
posts(
    post_id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references users (user_id)
);

alter table users
alter column password text;