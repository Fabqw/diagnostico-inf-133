
|  Nombres | Apellidos   |  CI |
| ------------ | ------------ | ------------ |
|  Fernando Fabricio | Quispe Yujra  | 8435021 lp  |

### Contexto:
Estás postulando para un puesto de desarrollador Front-end en una empresa que trabaja con clientes internacionales. Para poner a prueba tus habilidades te han pedido construir una aplicación web que permita visualizar un catalogo de Pokemons. Para esto te han proporcionado la documentación de la API de Pokemon para obtener los datos que debe consumir tu aplicación y te han proporcionado el diseño de UI/UX del componente para ver cada Pokemon Figma que debe cumplir tu aplicación.
#### Documentación de la API de Pokemon:
`GET https://pokeapi.co/api/v2/pokemon/{id o nombre de pokemon}`

#####Pokemon (Tipo)`
|  Nombre | Descripción   |  Tipo |
| ------------ | ------------ | ------------ |
|  id |El identificador del Pokemon  |  Entero |
|  name | El nombre del Pokemon  |  Cadena |
|  height | La altura del Pokemon en decímetros (dm)  |  Entero |
| weight | El peso del Pokemon en hectogramos (hg) | Entero  |
| abilities | Lista de habilidades potenciales que el Pokemon puede tener |  Lista PokemonAbility |
| sprites |  Conjunto de imágenes usadas para representar al Pokemon |  PokemonSprites |
| stats |  Una lista de estadísticas base para este Pokemon | Lista PokemonStat  |
|  type |  Una lista detallando a qué tipo de Pokemon pertenece |  Lista PokemonType |

#####PokemonAbility (Tipo)

| Nombre  | Descripcion  | Tipo  |
| ------------ | ------------ | ------------ |
| ability | La habilidad que puede tener el Pokemon  |  NamedAPIResource (Ability) |

#####PokemonType (Tipo)

| Nombre  | Descripcion  | Tipo  |
| ------------ | ------------ | ------------ |
| slot | El orden en el que se listan los tipos del Pokemon | Entero |
| type | El tipo que tiene el Pokemon | NamedAPIResource (Type)|

#####PokemonStat (Tipo)

| Nombre  | Descripcion  | Tipo  |
| ------------ | ------------ | ------------ |
| stat | Las estadísticas que el Pokemon tiene | NamedAPIResource (Stat)|
| base_stat | El valor base de la estadística | Entero|

#####PokemonSprites (Tipo)

| Nombre  | Descripcion  | Tipo  |
| ------------ | ------------ | ------------ |
| front_default | La imagen por defecto del Pokemon vista desde el frente en Batalla | Cadena|
| front_shiny |La imagen shiny del Pokemon vista desde el frente en Batalla	|Cadena|
|back_default|La imagen por defecto del Pokemon vista desde detrás en Batalla|Cadena|
|back_shiny|La imagen shiny del Pokemon vista desde detrás en Batalla| Cadena|

##### NamedAPIResource (Tipo)
| Nombre  | Descripcion  | Tipo  |
| ------------ | ------------ | ------------ |
| name | El nombre del recurso puede ser una habilidad, una forma, un nombre de un juego, una estadística base, etc. | Cadena |



**Table of Contents**

[TOCM]

[TOC]



###End
