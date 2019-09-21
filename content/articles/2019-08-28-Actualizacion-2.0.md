---
title: Actualización 2.0
author: Amaury.
date: 2019-08-28 15:50:00
---

Al final si fue [Nuxt](https://vuejs.org/) 🙌✨ y… si, una vez más, modifique el tema (mayormente en la parte del ‘Blog’) por algo con menos elementos, más minimalista se podría decir, que me agrada en general por lo que se quedara aquí un buen tiempo... ojalá.

Pero bien no todo fue hacer una y otra vez lo mismo, si no que me di a la tarea de aprender a crear componentes de [Vue.js](https://vuejs.org/) y empaquetarlos como un módulo de [npm](https://www.npmjs.com/) para poder distribuirlos así que, después de mucha búsqueda y de quebrarme la cabeza para entender [rollup.js](https://rollupjs.org/guide/en/) traigo aquí para “presentar en sociedad” mis primeros dos módulos:

- [v-github-activity](https://www.npmjs.com/package/v-github-activity)
- [v-avatar](https://www.npmjs.com/package/@amaury-tobias/v-avatar)

Aunque evidentemente su nombre habla mucho de su funcionalidad, igualmente explicare un poco de cómo es que funcionan (por qué pues quiero y ya); El primero (v-github-activity) puede verse en la parte más baja del inicio de la página desde ya un tiempo en donde se muestra la mi actividad reciente en GitHub, anteriormente utilizaba una versión que se puede encontrar [aquí](https://github.com/lexmartinez/vue-github-activity) pero que no se ajustaba a mis necesidades, por lo que basándome en su trabajo modifique algunas partes de su funcionamiento para ajustarlo a lo que necesitaba.

El segundo (v-avatar) es un componente que permite crear una “imagen de perfil” en base a el nombre de usuario como se puede ver aquí con el nombre “Amaury Tobías Quiroz”

<v-img src='images/v-avatar-1.PNG' :size='128'/>

Tiene más cosas bonitas, pero para eso está su propia página de [documentación](https://amaury-tobias.github.io/v-avatar/) en donde muchas más cosas son explicadas a detalle.

Y por fin 🙌 🙌 🎉 🎉 después de estar más de 3 años en la universidad comenzare el siguiente semestre el servicio social, siendo el ultimo a cursar, con un proyecto bastante grande que actualmente está en un nivel desarrollo muy temprano, para el que será necesaria la creación de más componentes para [Vue.js](https://vuejs.org/) o incluso en [Stenciljs](https://stenciljs.com/) por darles la posibilidad de ser reutilizados, sea como sea lo iré compartiendo por aquí.
