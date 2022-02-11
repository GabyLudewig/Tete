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
  `state` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `amigos` (`id_amistad`, `id_user1`, `id_user2`, `state`) VALUES
(1, 24, 31, 2),
(2, 24, 32, 2),
(3, 24, 33, 2),
(4, 31, 32, 2),
(5, 31, 33, 2),
(6, 32, 33, 2),
(7, 32, 34, 2),
(8, 33, 34, 2),
(9, 33, 35, 2),
(10, 34, 35, 2),
(11, 34, 36, 2),
(13, 32, 36, 2),
(14, 24, 36, 0);

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

INSERT INTO `cursos` (`id_curso`, `id_user_curso`, `nombre_curso`, `fecha_curso`, `descripcion_curso`) VALUES
(1, 24, 'Java', '2022-02-14', 'Curso de Java'),
(2, 24, 'Reat', '2022-02-07', 'Curso de Reac'),
(3, 33, 'React', '2021-11-09', 'Curso de React'),
(4, 34, 'Java', '2021-07-07', 'Curso de Java'),
(5, 36, 'Java', '2021-04-14', 'Curso de Java');

CREATE TABLE `extras` (
  `id_extras` int(10) NOT NULL,
  `id_user_extras` int(10) NOT NULL,
  `nombre_extras` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `hobbies` (
  `id_hobbies` int(10) NOT NULL,
  `id_user_hobbies` int(10) NOT NULL,
  `nombre_hobbies` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `idiomas` (
  `id_idioma` int(10) NOT NULL,
  `id_user_idioma` int(10) NOT NULL,
  `idioma` text NOT NULL
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

INSERT INTO `recomendacion` (`id_recomendacion`, `id_user_recomendado`, `id_user_recomienda`, `fecha_recomendacion`, `descripcion_recomendacion`) VALUES
(1, 24, 35, '2022-02-11 06:14:40', 'Muy bien'),
(2, 35, 31, '2022-02-11 06:15:29', 'Sigue asi'),
(3, 36, 32, '2022-02-11 06:15:29', 'Super');

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
(24, 'Gabriela', 'Ludewig', '../img/Gabriela_ludewig.jpg', '', '', '', '0000-00-00', 'gaby.ludewig@gmail.com', '432240ef98937be6a5385c8978727f39'),
(31, 'Rogelio', 'De Los Santos', '', '', '', '', '0000-00-00', 'rsantosc@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(32, 'Vincent', 'Van Gogh', 'VincentVanGogh', 'Zundert', 'Paises Bajos', 'https://www.linkedin.com/in/vincent-van-gogh', '1853-03-30', 'vincent.vangogh@gmail.com', 'd3facf360f0b4f2d570c093e7e130210'),
(33, 'Pablo', 'Picaso', 'PabloPicaso', 'Malaga', 'España', 'https://www.linkedin.com/in/pablo-picaso/', '0000-00-00', 'pablo.picaso@gmail.com', 'd34b885010b9fd09991f08b43e214f88'),
(34, 'Claude', 'Monet', 'ClaudeMonet', 'Paris', 'Francia', 'https://www.linkedin.com/in/claudeMonet/', '1840-11-14', 'claude.monet@gmail.com', '1493bc6f5ef643d1be4823548c71b6ca'),
(35, 'Leonardo', 'da Vinci', 'LeonardodaVinci', 'Florencia', 'Italia', 'https://www.linkedin.com/in/leonardo-da-vinci/', '1452-04-15', 'leonardo.davinci@gmail.com', 'd93ce360d1494f299341ff5edefa23ef'),
(36, 'Salvador', 'Dali', 'SalvadorDali', 'Gerona', 'España', 'https://www.linkedin.com/in/salvador-dali/', '1904-05-11', 'salvador.dali@gmail.com', '5b96a42483ec336d90e443011e68ff53');


ALTER TABLE `amigos`
  ADD PRIMARY KEY (`id_amistad`);

ALTER TABLE `ayuda`
  ADD PRIMARY KEY (`id_ayuda`);

ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`);

ALTER TABLE `extras`
  ADD PRIMARY KEY (`id_extras`);

ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id_hobbies`);

ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id_idioma`);

ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_quote`);

ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id_recomendacion`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `amigos`
  MODIFY `id_amistad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

ALTER TABLE `ayuda`
  MODIFY `id_ayuda` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `cursos`
  MODIFY `id_curso` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `extras`
  MODIFY `id_extras` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `hobbies`
  MODIFY `id_hobbies` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `idiomas`
  MODIFY `id_idioma` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `publicaciones`
  MODIFY `id_quote` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `recomendacion`
  MODIFY `id_recomendacion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
