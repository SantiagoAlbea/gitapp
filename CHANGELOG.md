# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2021-06-19

### Added

- Endpoint para eliminar movimientos
- Signo positivo o negativo para ingresos y egresos respectivamente

### Fixed

- Formato de las fechas transformado a local

## [1.1.0] - 2021-06-14

### Added

-   Alerta que indica que un movimiento se guardó exitosamente
-   Campo description al modelo

### Fixed

-   Headers de las cards en home
-   Fechas de los movimientos en la creacion
-   Formato de los montos en las tablas

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/SantiagoAlbea/gitapp/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/SantiagoAlbea/gitapp/releases/tag/v1.2.0
[1.1.0]: https://github.com/SantiagoAlbea/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/SantiagoAlbea/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/SantiagoAlbea/gitapp/releases/tag/v1.0.0
