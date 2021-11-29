if not exists CREATE DATABASE rh_menita_prueba;

USE rh_menita_prueba

CREATE TABLE empleados(
    id INT AUTO_INCREMENT,
    nombre VARCHAR(70) NOT NULL,
    rfc CHAR(19) NOT NULL,
    nacimiento DATE NOT NULL,
    departamento int NOT NULL,
    status BOOLEAN NOT NULL,
    sueldo FLOAT(7,2) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO empleados (nombre, rfc, nacimiento, departamento, status, sueldo)
    VALUES ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 3, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 1, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81),
           ('Jose Israel Flores Campos', 'FOCI981011HJCLMS01', '1998-10-11', 2, 1, 6000.81);