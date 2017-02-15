-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 15-02-2017 a las 02:41:58
-- Versión del servidor: 5.5.53-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `luunode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Tabla para Pedidos asociado a un usuario' AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `order`
--

INSERT INTO `order` (`id`, `code`, `user_id`, `created_at`) VALUES
(1, 'XMPD-124', 1, '2017-02-15 07:00:26'),
(2, 'IUE-1230-RAT', 2, '2017-02-15 07:00:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Tabla para Usuarios' AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `phone`) VALUES
(1, 'Jenny Lucia', 'Vega G', 'jeluusita@gmail.com', '952545874'),
(2, 'Eduardo Gabriel', 'Cabrera J', 'dvex.cabrera@gmail.com', '943272480');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
