-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 19, 2024 at 04:33 AM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sexto_parcial`
--

-- --------------------------------------------------------

--
-- Table structure for table `Publicaciones`
--

CREATE TABLE `Publicaciones` (
  `ID_publicacion` int(11) NOT NULL,
  `ID_usuario` int(11) NOT NULL,
  `Contenido` text NOT NULL,
  `Fecha_Publicacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Publicaciones`
--

INSERT INTO `Publicaciones` (`ID_publicacion`, `ID_usuario`, `Contenido`, `Fecha_Publicacion`) VALUES
(1, 4, 'Primer POSTssss', '2024-01-18'),
(2, 1, 'Contenido 1', '2024-01-18'),
(5, 1, 'Ultiiiimo', '2024-01-18');

-- --------------------------------------------------------

--
-- Table structure for table `Usuarios`
--

CREATE TABLE `Usuarios` (
  `ID_usuario` int(11) NOT NULL,
  `Nombre` text NOT NULL,
  `Correo` text NOT NULL,
  `Contrasena` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Usuarios`
--

INSERT INTO `Usuarios` (`ID_usuario`, `Nombre`, `Correo`, `Contrasena`) VALUES
(1, 'Matias Fonsecasss', 'matiasfonseca.lesc@gmail.com', '123456789'),
(4, 'juan perez de las mercedes', 'juanito@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD PRIMARY KEY (`ID_publicacion`),
  ADD KEY `ID_usuario` (`ID_usuario`);

--
-- Indexes for table `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`ID_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  MODIFY `ID_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `ID_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `Usuarios` (`ID_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
