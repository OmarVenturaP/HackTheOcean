<template>
  <nav>

      <ul>

        <li><router-link to="/" class="a-item"><a href="#" class="">
          Home
        </a></router-link></li>

        <li> <router-link to="/report" class="a-item"><a href="#">
          Reporte
        </a></router-link></li>

        <li><a href="#"><router-link to="/donaciones" class="a-item">
          Donaciones
        </router-link></a></li>

        <li><a href="#"><router-link to="/info" class="a-item">
          Información Adicional
        </router-link></a></li>

        <li><a href="#"><router-link to="/account" class="a-item">
          Mi Cuenta
        </router-link></a></li>

        <li><a href="#"><router-link to="/enterprises" class="a-item">
          Empresas
        </router-link></a></li>

        <i class="fa-solid fa-bars navIcon"></i>
        <i class="fa-solid fa-x navIcon"></i>

      </ul>
    </nav>
  <router-view/>
</template>

<style>
/* Creando estilo de Nav Bar */
nav {
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    background-color: var(--color-principal);
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 5px #000;
}
nav > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 35px;
    margin-right: 35px;
}
.active {
    color: var(--color-quinto);
    background: var(--color-secundario);
}
nav > ul > li > router-link > a:active {
    color: var(--color-quaternario);
}
nav a {
  text-decoration: none;
  color: white;
}
.a-item {
    text-decoration: none;
    padding: 15px;
    color: var(--color-sexto);
    font-size: 18px;
    border-radius: 10px;;
    line-height: 30px;
}
.a-item:hover {
    color: var(--color-quinto);
    background: var(--color-secundario);
}
.navIcon {
    display: none;
}
/* Paleta de colores */
* {
    --color-principal: rgb(1, 104, 112);
    --color-secundario: rgb(3, 83, 120);
    --color-terciario: rgb(109, 163, 199);
    --color-quaternario: rgb(178, 192, 203);
    --color-quinto: rgb(9, 202, 199);
    --color-sexto: rgb(255, 255, 255);
    --color-secciones: rgba(178, 192, 203, 0.342);
    --input: rgba(7, 66, 61, 0.507);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
