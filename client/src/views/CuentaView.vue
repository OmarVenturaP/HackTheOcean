<template>

    <div>

    <main>
        <section id="espacio">' '</section><!--para crear espacio-->
        <h1 class="h1">Crear cuenta</h1>
        <button>
            <a href="./createaccount.html">Crear cuenta</a>
        </button>

        <div class="reports">

            <h2>Reportes Realizados</h2>
            <div class="report1" id="report1">
                <h4>Reporte 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, fugiat?</p>
            </div>
            <div class="report2" id="report2">
                <h4>Reporte 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, fugiat?</p>
            </div>
            <div class="report3" id="report3">
                <h4>Reporte 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, fugiat?</p>
            </div>
            <div class="report4" id="report4">
                <h4>Reporte 4</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, fugiat?</p>
            </div>
        </div>
    </main>

    <footer>
        <section>
            <a href="#homepage">Home</a>
            <a href="=mailto:sargassum@gmail.com">Correo de contacto</a>
        </section>
            <p>Copyright 2022</p>
    </footer>

    </div>

</template>

<script>
export default {
  name: 'CuentaView',
};
</script>

<style scoped>
/* nuevos estilos para formulario create account account y reports */
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
main{
    margin: 0;
    background: linear-gradient(to bottom right, rgb(178, 192, 203), rgb(3, 83, 120), rgb(109, 163, 199));
    font-family: 'Roboto', sans-serif;
    padding-bottom: 120px;
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
</style>
