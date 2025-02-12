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

INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ana', 'Mari�', 25, '12345678901');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ivan', 'Horvat', 32, '98765432109');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Marija', 'Kova�evi�', 41, '55555555555');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Petar', 'Babi�', 28, '11122233344');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Ivana', 'Juri�', 35, '99887766554');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Josip', '�imi�', 52, '44556677889');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Sandra', 'Novak', 29, '10111213141');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Marko', 'Vukovi�', 38, '20212223242');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Mirjana', 'Tomi�', 45, '30313233343');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Stjepan', 'Radi�', 60, '40414243444');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Katarina', 'Peri�', 22, '50515253545');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Tomislav', 'Markovi�', 31, '60616263646');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Valentina', 'Luki�', 37, '70717273747');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('�eljko', 'Kne�evi�', 55, '80818283848');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Martina', 'Pavlovi�', 26, '90919293949');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Antonio', 'Grgi�', 33, '00011122233');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Dijana', 'Stani�', 40, '11122233344');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Kre�imir', 'Bari�i�', 58, '22233344455');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Renata', '�poljari�', 27, '33344455566');
INSERT INTO kupci (ime, prezime, godine, oib) VALUES ('Davor', 'Mesi�', 36, '44455566677');

insert into robe(ime, cijena, kolicina, kupac) values
('jhin','1500','1',1);

insert into narudzbe(cijena, roba, kupac) values
('1500',1,1);

insert into stavke(narudzba, brojnarudzbe) values
(1,'1');
