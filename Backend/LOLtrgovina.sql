use master;
go
drop database if exists Gudelj;
go
create database Gudelj collate Croatian_CI_AS;
go
use Gudelj;

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
vrsta varchar(50) not null,
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

insert into kupci(ime, prezime, godine) values
('petar','gudelj','19');

insert into robe(ime, vrsta, cijena, kolicina, kupac) values
('jhin','na daljinu','1500','1',1);

insert into narudzbe(cijena, roba, kupac) values
('1500',1,1);

insert into stavke(narudzba, brojnarudzbe) values
(1,'1');
