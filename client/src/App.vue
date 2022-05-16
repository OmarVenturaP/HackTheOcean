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

        <li><a href="#"><router-link to="/empresas" class="a-item">
          Empresas
        </router-link></a></li>

        <i class="fa-solid fa-bars navIcon"></i>
        <i class="fa-solid fa-x navIcon"></i>

      </ul>
    </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
