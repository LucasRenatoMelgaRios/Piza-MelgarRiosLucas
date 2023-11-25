-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2023 at 04:26 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizzeria`
--

-- --------------------------------------------------------

--
-- Table structure for table `ordens`
--

CREATE TABLE `ordens` (
  `id_orden` int NOT NULL,
  `id_producto` int NOT NULL,
  `id_usuario` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id_producto` int NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` decimal(7,0) NOT NULL,
  `descripcion` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `precio`, `descripcion`, `imagen`) VALUES
(2, 'Medium combo', '20', '1 medium pizza and 1 personal soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_971110ee-bcfc-4f01-a71f-960be0408c9a.jpg'),
(3, 'My Supreme Box', '23', '1 personal pizza, 3 BBQ wings and a personal soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_b5fc566d-07c4-4af8-83f6-ac5bbc5db973.jpg'),
(4, 'Medium Combo', '25', '1 medium pizza, 4 silician sticks and a personal soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_77c0b22c-c85e-4d7f-8b60-4ff182576264.jpg'),
(5, 'Big Three Pack', '71', '3 large pizzas and 6 silician sticks', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_7ea3ebb9-4abe-46b3-abb7-6ff97cc2e79b.png'),
(6, 'Complete Medium Combo', '40', '2 medium pizzas, 6 silician sticks and 1L soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_25a29bfa-4929-44d4-9187-4219c40df37b.png'),
(7, 'Combrother Combo', '70', '2 Large pizzas and 1L soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_2285f412-75d6-4358-be67-6e5fdfb046d1.jpg'),
(8, 'Big Feast', '90', '1 large pizza, 6 silician sticks and 1L soda', 'https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_8dfe18bc-7030-4abb-91a3-a3a934aab786.jpg'),
(9, 'Duo Lasagna Bolognesa', '27', '1 delicious bolognese lasagna and 1 personal soda', 'https://static.phdvasia.com/pe/img/combos/duo-lasagna-bolognesa-desktop-thumbnail.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellidos` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni` int NOT NULL,
  `direccion` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `correo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ordens`
--
ALTER TABLE `ordens`
  ADD PRIMARY KEY (`id_orden`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordens`
--
ALTER TABLE `ordens`
  MODIFY `id_orden` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
