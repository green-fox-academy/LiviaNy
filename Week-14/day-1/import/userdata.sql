CREATE TABLE `userData` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`prefix` ENUM('Rev', 'Honorable', 'Dr', 'Mr', 'Mrs', 'Ms', ''),
	`first_name` VARCHAR(25) NOT NULL,
	`last_name` VARCHAR(25) NOT NULL,
	`address` VARCHAR DEFAULT '',
	`height` DOUBLE,
	`bitcoin_address` VARCHAR NOT NULL,
	`color_preference` VARCHAR DEFAULT '',
	PRIMARY KEY (`id`)
);