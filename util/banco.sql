CREATE DATABASE onibus_api;
USE onibus_api;

CREATE TABLE linha (
	id_linha INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_linha VARCHAR(125) NOT NULL,
    numero_linha INT NOT NULL,
    origem_linha VARCHAR(45) NOT NULL,
    destino_linha VARCHAR(45) NOT NULL,
    sentido_linha VARCHAR(45),
    numero_veiculo INT NOT NULL
);