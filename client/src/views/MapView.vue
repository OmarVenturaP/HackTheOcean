<template>
  <div class="main">
    <main>
      <h1 class="h1">Reporte</h1>
      <div class="reportform">
        <form action="Enviar" class="formReport">
          <section class="formReport">
            <label for="propiedad" name="propiedad" id="propiedad" class="propiedad">Propiedad:</label>
            <input type="text" name="propiedad" id="propiedad" class="propiedad" placeholder="Propiedad (Pública o Privada)">
          </section>
          <section class="formReport">
            <label for="direccion" name="direccion" id="direccion" class="direccion">Dirección: </label>
            <input type="text" name="direccion" id="direccion" class="direccion" placeholder="Dirección">
          </section>
          <section class="formReport">
            <label for="municipio" name="municipio" id="municipio" class="municipio">Municipio: </label>
            <input type="text" name="municipio" id="municipio" class="municipio" placeholder="Municipio">
          </section>
          <section class="formReport">
            <label for="estado" name="estado" id="estado" class="estado">Estado: </label>
            <input type="text" name="estado" id="estado" class="estado" placeholder="Estado">
          </section>
          <section class="formReport">
            <label for="cp" name="cp" id="cp" class="cp">Código Postal: </label>
            <input type="number" name="cp" id="cp" class="cp" placeholder="Código Postal">
          </section>
          <section class="formReport">
            <label for="contacto" name="contacto" id="contacto" class="contacto">Teléfono de Contacto: </label>
            <input type="number" name="contacto" id="contacto" class="contacto" placeholder="Teléfono de Contacto">
          </section>
            <section class="formReport">
            <label  abel for="correo" name="correo" id="correo" class="correo">Correo Electrónico: </label>
            <input type="email" name="correo" id="correo" class="correo" placeholder="Correo Electrónico">
            <button type="submit">Enviar</button>
          </section>
        </form>
      </div>

    </main>

    <div id="map">
      <MapComponent/>
    </div>

  </div>

      <footer>
        <section>
          <a href="#">Home</a>
          <a href="=mailto:sargassum@gmail.com">Correo de contacto</a>
        </section>
        <p>Copyright 2022</p>
    </footer>

</template>

<script>
// @ is an alias to /src
import MapComponent from '@/components/MapComponent.vue';

export default {
  name: 'MapView',
  components: {
    MapComponent,
  },
};
</script>

<style  scoped>
/*Paleta de Colores*/
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
.main{
    margin: 0;
    background: linear-gradient(to bottom right, rgb(178, 192, 203), rgb(3, 83, 120), rgb(109, 163, 199));
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}
#map {
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 800px;
  height: 300px;
  margin-block: 20px;
  margin-bottom: 50px;
}
footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--color-principal);
    height: 55px;
    color:black;
    box-shadow: 0 0 5px #000;
    left: 0;
    bottom: 0;
    justify-content: space-between;
    padding: 0 25px;
}
footer section{
    float: right;
}
footer p{
    line-height: 55px;
    margin:0
}
footer a{
    color: white;
    text-decoration: none;
}
footer a:hover {
    color: cornflowerblue;
    transition: color 0.3s ease;
}
button {
    background: var(--color-secundario);
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: var(--color-sexto);
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;
}
button > a {
    align-items: center;
    text-decoration: none;
}
button > a:visited {
    color: var(--color-sexto);
}
input {
    width: 200px;
    background: var(--input);
    border-radius: 10px;
}
/* Creando estilo de Nav Bar */
nav {
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
nav > ul > li > a {
    text-decoration: none;
    padding: 15px;
    color: var(--color-sexto);
    font-size: 18px;
    border-radius: 10px;;
    line-height: 30px;
}
nav > ul > li > a:hover {
    color: var(--color-quinto);
    background: var(--color-secundario);
}
nav > ul > li > a:active {
    color: var(--color-quaternario);
}
.navIcon {
    display: none;
}
.h1{
    position: relative;
    color:rgba(255, 255, 255, 0.9);
    text-shadow: 3px 5px 5px gainsboro;
    padding-top: 60px;
    text-align: center;
    margin-left: 30%;
    margin-right: 30%;
}
.create {
    position: relative;
    color:rgba(255, 255, 255, 0.9);
    text-shadow: 3px 5px 5px gainsboro;
    width: 50%;
    padding-top: 60px;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
}
.create:visited {
    color:rgba(255, 255, 255, 0.9);
    text-shadow: 3px 5px 5px gainsboro;

}
main button:hover{
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, .5);
    transition: box-shadow 0.3s ease;
}
/*index.html*/
.header {
    position: relative;
    align-items: center;
    font-size: 90px;
    color:var(--color-secundario);
    text-shadow: 3px 7px 5px var(--color-terciario);
    padding: 200px 450px;
}
main > section > video {
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
}
.buttonHome {
    position: absolute;
    top: 550px;
    left: 45%;
    right: 45%;
}
#divisor {
    position: relative;
    height: 60px;
}
.actualizaciones {
    position: relative;
    left: 0;
    font-size: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.quehacemos {
    position: relative;
    left: 0;
    font-size: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-secundario);
}
.divisor2 {
    position: absolute;
    height: 30px;
    padding: 3px 5px;
    border-radius: 50%;
    right: 0;
    bottom: -610px;
    margin-right: 25px;
    font-size: 30px;
    background: var(--color-sexto);
}
/*Secciones*/
.secciones {
    width: auto;
    margin-left: 170px;
    margin-right: 170px;
    background-color: var(--color-secciones);
    margin-top: 120px;
    padding: 20px;
    border-radius: 15px;
}
#seccion1{
    background-image: url("./../assets/problem.png");
    background-repeat: no-repeat;
    background-position: left;
    width: auto;
    height: 310px;
}
#problemtext{
    position: relative;
    height: 310px;
    width: 650px;
    padding: 0 0 0 180px;
}
#seccion2{
    background-image: url("./../assets/afectacion.png");
    background-repeat: no-repeat;
    background-position:right;
    height: 290px;
}
#afectacionestexto{
    justify-content: justify;
    height: 100px;
    padding-right: 200px;
}
#seccion4{
    background-image: url("./../assets/sargazo1.png");
    background-repeat: no-repeat;
    background-position: right;
    height: 225px;
}
#aditionalinfo{
    height: 0px;
    width: 600px;
    padding: 0 220px 0 0 ;
}
#img{
    padding: 0 0 0 200px;
}
#reportetexto{
    width: 854px;
    padding: 0 0 0;
}
/*Creando botones de imagenes*/
.containerImagenes {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerImagenes > img {
    width: 21%;
    height: 100%;
    margin: 5px;
    object-fit: cover;
    border-radius: 10px;
}
.containerImagenes > img:hover {
    box-shadow: 5px 5px 5px var(--color-principal);
    cursor: pointer;
    transform: translateY(-5px);
}
/*Formularios*/
.reportform{
    width: 400px;
    margin: 0 auto;
}
.formReport {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.donateform{
    width: 400px;
    margin: 0 auto;
}
.account{
    border: 500px 0 500px 0;
}
/* nuevos estilos para formulario create account account y reports */
.createaccount{
    width: 400px;
    margin: 0 auto;
}
.accountForm {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button_create {
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
}
.iaccount {
    position: relative;
    color:rgba(255, 255, 255, 0.9);
    text-shadow: 3px 5px 5px gainsboro;
    text-align: center;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}
#espacio{
    margin: 0 0 50px 0;
}
.reports{
    width: 400px;
    margin: 0 auto;
}
/* Agregado de estilos para la seccion de infromacion, reporte y footer asi como
animaciones de hover y transiciones*/
section button:hover{
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, .5);
    transition: box-shadow 0.3s ease;
}
footer{
    background-color: var(--color-principal);
    height: 55px;
    color:black;
    box-shadow: 0 0 5px #000;
    left: 0;
    bottom: 0;
    justify-content: space-between;
    padding: 0 25px;
}
footer section{
    float: right;
}
footer p{
    line-height: 55px;
    margin:0
}
footer a{
    color: white;
    text-decoration: none;
}
footer a:hover {
    color: cornflowerblue;
    transition: color 0.3s ease;
}
</style>
