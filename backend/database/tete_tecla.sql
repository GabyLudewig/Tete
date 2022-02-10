SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `amigos` (
  `id_amistad` int(10) NOT NULL,
  `id_user1` int(10) NOT NULL,
  `id_user2` int(10) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `ayuda` (
  `id_ayuda` int(10) NOT NULL,
  `ide_user_ayuda` int(10) NOT NULL,
  `nombre_ayuda` text NOT NULL,
  `fecha_ayuda` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `descripcion_ayuda` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `cursos` (
  `id_curso` int(10) NOT NULL,
  `id_user_curso` int(10) NOT NULL,
  `nombre_curso` text NOT NULL,
  `fecha_curso` date NOT NULL,
  `descripcion_curso` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `publicaciones` (
  `id_quote` int(10) NOT NULL,
  `id_user` int(10) DEFAULT NULL,
  `quote` text DEFAULT NULL,
  `fecha_quote` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `publicaciones` (`id_quote`, `id_user`, `quote`, `fecha_quote`) VALUES
(1, 24, 'Hello Teclers!!!', '2022-02-10 02:03:50');

CREATE TABLE `recomendacion` (
  `id_recomendacion` int(10) NOT NULL,
  `id_user_recomendado` int(10) NOT NULL,
  `id_user_recomienda` int(10) NOT NULL,
  `fecha_recomendacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `descripcion_recomendacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombres` text NOT NULL,
  `apellidos` text NOT NULL,
  `foto_perfil` varchar(150) NOT NULL,
  `ciudad` text NOT NULL,
  `pais` text NOT NULL,
  `linkedIn` text NOT NULL,
  `fecha_nac` date NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `nombres`, `apellidos`, `foto_perfil`, `ciudad`, `pais`, `linkedIn`, `fecha_nac`, `email`, `password`) VALUES
(24, 'Gabriela', 'Ludewig', '../img/Gabriela_ludewig.jpg', '', '', '', '0000-00-00', 'gaby.ludewig@gmail.com', '432240ef98937be6a5385c8978727f39');


ALTER TABLE `amigos`
  ADD PRIMARY KEY (`id_amistad`);

ALTER TABLE `ayuda`
  ADD PRIMARY KEY (`id_ayuda`);

ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`);

ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_quote`);

ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id_recomendacion`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `amigos`
  MODIFY `id_amistad` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `ayuda`
  MODIFY `id_ayuda` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `cursos`
  MODIFY `id_curso` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `publicaciones`
  MODIFY `id_quote` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `recomendacion`
  MODIFY `id_recomendacion` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
