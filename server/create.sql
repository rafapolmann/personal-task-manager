drop table card;
drop table boardColumn;
drop table board;

create table board(
    id_board serial primary key,
    name text
);

create table boardColumn(
    id_boardColumn serial primary key,
    id_board integer references board (id_board) on delete cascade on update cascade,
    name text,
    has_estimative boolean,
    index integer
);

create table card(
    id_card serial primary key,
    id_boardColumn integer references boardColumn (id_boardColumn) on delete cascade on update cascade,
    title text,
    estimative integer,
    color text,
	index integer
); 

insert into board (name) values ('Projeto 1');
insert into boardColumn (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into boardColumn (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into boardColumn (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 1', 'blue', 3);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 2', 'yellow', 2);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 3', 'red', 1);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 4', 'green', 2);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 5', 'orange', 5);
insert into card (id_boardColumn, title, color, estimative) values (1, 'Atividade 6', 'white', 6);
insert into board (name) values ('Projeto 2');
insert into boardColumn (id_board, name, has_estimative) values (2, 'Coluna A', true);