use master;
go
drop database if exists LOLtrgovina;
go
create database LOLtrgovina collate Croatian_CI_AS;
go
use LOLtrgovina;

create table kupci(
sifra int not null primary key identity (1,1),
ime varchar(50) not null,
prezime varchar(50) not null,
godine int not null,
oib char(11) null
);

create table robe(
sifra int not null primary key identity (1,1),
ime varchar(50) not null,
vrsta varchar(50)  null,
cijena decimal(10,2) not null,
kolicina int not null,
kupac int not null references kupci(sifra)

);

create table narudzbe(
sifra int not null primary key identity (1,1),
kolicina int  null,
cijena decimal(10,2) not null ,
roba int not null references robe(sifra),
kupac int not null references kupci(sifra)
);

create table stavke(
sifra int not null primary key identity (1,1),
narudzba int not null references  narudzbe(sifra),
brojnarudzbe int not null
);

INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ana', 'Mariæ', 25, '12345678901');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ivan', 'Horvat', 32, '98765432109');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Marija', 'Kovaèeviæ', 41, '55555555555');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Petar', 'Babiæ', 28, '11122233344');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ivana', 'Juriæ', 35, '99887766554');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Josip', 'Šimiæ', 52, '44556677889');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Sandra', 'Novak', 29, '10111213141');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Marko', 'Vukoviæ', 38, '20212223242');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Mirjana', 'Tomiæ', 45, '30313233343');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Stjepan', 'Radiæ', 60, '40414243444');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Katarina', 'Periæ', 22, '50515253545');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Tomislav', 'Markoviæ', 31, '60616263646');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Valentina', 'Lukiæ', 37, '70717273747');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Željko', 'Kneževiæ', 55, '80818283848');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Martina', 'Pavloviæ', 26, '90919293949');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Antonio', 'Grgiæ', 33, '00011122233');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Dijana', 'Staniæ', 40, '11122233344');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Krešimir', 'Barišiæ', 58, '22233344455');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Renata', 'Špoljariæ', 27, '33344455566');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Davor', 'Mesiæ', 36, '44455566677');

insert into robe(ime, cijena, kolicina, kupac) values
('jhin','1500','1',1);

insert into narudzbe(cijena, roba, kupac) values
('1500',1,1);

insert into stavke(narudzba, brojnarudzbe) values
(1,'1');
