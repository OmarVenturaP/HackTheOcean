<template>
  <div>
    <main>

      <section class="inicio" id="inicio">
        <h1 class="header">Sargassum</h1>
        <video src="./../assets/ocean.mp4" autoplay loop muted></video>
        <button class="buttonHome">
          <a href="#">HOME</a>
        </button>
      </section>   

      <p id="divisor"></p>

      <section class="homepage">
        <h2 class="actualizaciones">Actualizaciones</h2>
        <div>
            <h3 class="quehacemos">Que estamos haciendo actualmente</h3>
            <div class="containerImagenes" id="containerImagenes">
                <img src="./../assets/carrete1.png" alt="Recolectando Sargazo">
                <img src="./../assets/carrete2.png" alt="Recolectando Sargazo">
                <img src="./../assets/carrete3.png" alt="Recolectando Sargazo">
                <img src="./../assets/carrete4.png" alt="Recolectando Sargazo">
                <a href="#divisor2"><i class="fa-solid fa-angle-down divisor2" ></i></a>
            </div>
        </div>
        
        <p id="divisor2"></p>

        <div class="secciones" id="secciones">
          <div class="seccion" id="seccion1">
            <h3>Problematica</h3>
            <p id="problemtext">Actualmente los metodos para el reporte de sargazo son ya sea a los numeros telefonico 
              de la secretaria de marina 01 800 62 74 621 o mediante redes sociales en las cuales la poblacion general 
              realiza presion a gobierno para su recoleccion y eliminacion sin aprovechar el material la propuesta 
              es mediante la pagina centralizar las denuncias de sargazo y que estas puedan llegar a empresas privadas 
              las cuales se encarguen de la remocion y aprovechamiento del sargazo si estas no pudieran recolectarlo el 
              reporte pasaria a gobierno para su recoleccion y eliminacion</p>
          </div>
        </div>

        <div class="seccion" id="seccion2">
            <h3>Afectaciones</h3>
            <p id="afectacionestexto">Más allá de que el sargazo puede enredarse en las piernas de los turistas, detiene la oxigenación del agua, cambia a marrón su color turquesa característico en el Caribe y genera gases que huelen mal al entrar en descomposición en las playas.
                <br>Investigadores de la UNAM aseguran que pone en riesgo al Mar Caribe, pues el entorno físico y la gran diversidad de especies animales y arrecifes coralinos son gravemente afectados.
                <br>Brigitta Ine van Tussenbroek asegura que el sargazo tiene la capacidad de cambiar los ecosistemas, por lo que en el Caribe "ya es un desastre natural, pues las cantidades de materia orgánica y nutrientes que aporta no tienen precedente. Si esto continúa y no se maneja de manera integral el daño será permanente. El problema es muy grave".
                <br>Rosa Elisa Rodríguez, otra investigadora del ICML, sostiene que la presencia del sargazo también ha afectado o causado la muerte masiva de 72 especies marinas, como peces y crustáceos, debido a la ausencia de luz y la falta de oxigenación, según el mismo comunicado difundido por la UNAM.</p>
        </div>

        <div class="seccion" id="seccion3">
            <h3>Resultado Final</h3>
            <img src="./../assets/recicle2.png" alt=""><!--se agrego esta linea-->
            <img src="./../assets/recicle.png" alt=""><!--se agrego esta linea-->
            <p>Muchas cosas se pueden fabricar a través de la práctica de reciclar el sargazo: desde calzados, libretas y hasta combustible son algunos de los productos que se han producido para aprovechar la llegada masiva de sargazo a costas de México.</p><!--se agrego esta linea-->
            <button><!--se agrego esta linea-->
                <a href="./../views/donations.html">DONACIONES</a><!--se agrego esta linea-->
            </button><!--se agrego esta linea-->
        </div>


        <div class="seccion" id="seccion4">
            <h3>Información adicional</h3>
            <p id="aditionalinfo">Algunas recomendaciones para abordar el tema del sargazo son: robustecer la cooperación internacional; garantizar la suficiencia presupuestal
                para atender el problema de las arribazones; fortalecer a los centros de
                investigación; elaborar la legislación correspondiente; crear un programa
                integral de aprovechamiento; así como impulsar la participación del gobierno, el sector privado y la academia.
            </p>
            <button>
                <a href="#">INFORMACION</a>
            </button>
        </div>

        <div class="seccion" id="seccion5"><!--"se cambio a seccion5" antes contenia "seccion4"-->
            <h3>Reporte</h3>
            <img id="img" src="#" alt="">
            <p id="reportetexto">Al hace click en el boton de reporte sera llevado a una pagina donde su reporte sera tomado para su seguimiento</p>
            <button>
                <a href="#">REPORTE</a>
            </button>
        </div>

        </section>
    </main>

    
    <footer>

      <section>
        <a href="#">Home</a>
        <a href="=mailto:sargassum@gmail.com">Correo de contacto</a>
      </section>

      <p>Copyright 2022</p>

    </footer>
    
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: 'IndexView'
}
</script>


<style scoped>
/*
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <script src="https://kit.fontawesome.com/b0ab042d33.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css"/> 
*/
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