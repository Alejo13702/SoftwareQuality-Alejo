SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS,
FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE,
SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO
_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------

-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `mydb`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`account` (
`account_id` INT NOT NULL AUTO_INCREMENT,
`account_idcity` INT NOT NULL,
PRIMARY KEY (`account_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`auth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`auth` (
`auth_id` INT NOT NULL,
`auth_password` VARCHAR(45) NOT NULL,
PRIMARY KEY (`auth_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`rol` (
`roleld` INT NOT NULL,
`rol_name` VARCHAR(45) NOT NULL,
PRIMARY KEY (`roleld`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
`user_id` INT NOT NULL AUTO_INCREMENT,
`user_identificacion` VARCHAR(70) NOT NULL,
`user_name` VARCHAR(45) NOT NULL,
`user_last name` VARCHAR(45) NOT NULL,
`user_email` VARCHAR(100) NOT NULL,
`user_phone` VARCHAR(45) NOT NULL,
`user_password` VARCHAR(45) NOT NULL,
`user_profileimage` VARCHAR(45) NOT NULL,
`account_account_id` INT NOT NULL,
`auth_auth_id` INT NOT NULL,
`rol_roleld` INT NOT NULL,
PRIMARY KEY (`user_id`),
INDEX `fk_user_account_idx` (`account_account_id` ASC) ,

INDEX `fk_user_auth1_idx` (`auth_auth_id` ASC) ,
INDEX `fk_user_rol1_idx` (`rol_roleld` ASC) ,
CONSTRAINT `fk_user_account`
FOREIGN KEY (`account_account_id`)
REFERENCES `mydb`.`account` (`account_id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_user_auth1`
FOREIGN KEY (`auth_auth_id`)
REFERENCES `mydb`.`auth` (`auth_id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_user_rol1`
FOREIGN KEY (`rol_roleld`)
REFERENCES `mydb`.`rol` (`roleld`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
