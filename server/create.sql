drop table card;
drop table boardColumn;
drop table board;

create table board(
    id_board serial primary key,
    name text
);

create table boardColumn(
    id_boardColumn serial primary key,
    id_board integer references board (id_board),
    name text,
    has_estimative boolean
);

create table card(
    id_card serial primary key,
    id_boardColumn integer references boardColumn (id_boardColumn),
    title text,
    estimative integer
);

insert into board (id_board, name) values (1, 'Projeto 1');
insert into boardColumn (id_boardColumn, id_board, name, has_estimative) values (1, 1, 'Coluna A', true);
insert into boardColumn (id_boardColumn, id_board, name, has_estimative) values (2, 1, 'Coluna A', true);
insert into boardColumn (id_boardColumn, id_board, name, has_estimative) values (3, 1, 'Coluna A', true);
insert into card (id_card, id_boardColumn, title, estimative) values (1, 1, 'Atividade 1', 3);
insert into card (id_card, id_boardColumn, title, estimative) values (2, 1, 'Atividade 2', 2);
insert into card (id_card, id_boardColumn, title, estimative) values (3, 1, 'Atividade 3', 1);