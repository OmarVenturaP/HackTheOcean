<template>

    <div class="root">

        <main>
            <h1 class="h1">Información Adicional</h1>
            <p>Es un hecho, que, en los últimos años, se ha presentado en el Caribe Mexicano
            un volumen muy grande de colonias de Sargazo, que cuándo llegan a la Costa
            producen estragos de importante magnitud, pues oscurecen el color transparente
            del mar, tornándolo café y marrón, eliminando sus tonalidades turquesas, así como
            generando una atmósfera fétida muy desagradable, probablemente nociva a la
            salud.
            Esta situación, tiene consecuencias muy negativas para el turismo, que es el rubro
            más importante para la generación de empleos e ingresos en la zona de Cancún y
            la Riviera Maya, afectando también a la pesca.
            <br>
            Existen diversas explicaciones sobre las causas que han multiplicado el volumen
            del Sargazo, y de sus arribazones masivas a las Costas de las Islas del Caribe
            Occidental, y de la Riviera Continental Caribeña. Con las investigaciones científicas,
            realizadas hasta ahora, se mencionan como causas el cambio climático, y su
            incidencia en la modificación de las corrientes marinas, que han provocado que
            colonias de Sargazo del área ecuatorial (tal vez originarias de la zona marítima
            atlántica del Norte del Brasil, frente a la región amazónica). Es necesario profundizar
            en la investigación científica, y apoyar a equipos de investigadores y Centros de
            Investigación para que se realicen las investigaciones necesarias, para disponer de
            datos científicos suficientes, tanto de los orígenes y todas las características del
            Sargazo, como las de su posible aprovechamiento, formas de recolección y
            confinamiento, que corresponda a la identificación del fenómeno y su prospectiva,
            para encontrar fórmulas y mecanismos que hagan posible evitar las consecuencias
            dañinas del Sargazo, y faciliten su control y aprovechamiento.
            <br>
            La problemática del Sargazo es de dimensión continental, incluso mundial, por
            la repercusión del cambio climático. Por ello, es indispensable el intercambio de
            información, la cooperación internacional y quizá la generación de Acuerdos de
            orden Internacional, que precisen normatividad sobre el tema. El liderazgo de la
            Secretaría de Relaciones Exteriores es esencial en esta materia.
            <br>
            En el ámbito de México, resulta necesaria la colaboración y coordinación de los
            tres órdenes de gobierno: federal, estatales y municipales. También se requiere el
            apoyo a la comunidad científica y a los centros de investigación. Es necesaria la
            participación de la iniciativa privada y la sociedad civil, pues son directamente
            afectados, y muchos están comprometidos con la protección del patrimonio natural.
            Saludamos la participación de la Secretaría de Marina en la atención de la
            emergencia provocada por los graves arribazones de Sargazo en 2018 y 2019,
            creemos que esta participación debe fortalecerse, con presupuesto suficiente, y
            valorando la necesidad de generar un mecanismo interinstitucional, con la
            participación de los tres órdenes de gobierno, de la iniciativa privada y de la
            292
            academia para atender de manera permanente la problemática del Sargazo, pues
            es previsible que la arribazón del Sargazo sea un asunto constante-intermitente,
            pero con un horizonte de permanencia.
            <br>
            La presencia periódica de arribazones masivas de Sargazo, es previsible si los
            factores climáticos que se han mencionado como uno de los posibles orígenes
            persisten, por lo que es recomendable que en México se diseñe y se organice un
            programa integral de atención a la problemática del Sargazo, y se prevean
            presupuestos multianuales para su atención, integrando proyectos de investigación,
            que permitan comprender a cabalidad la circunstancia de las variedades del
            Sargassum Pelágico, los cuales son: Sargassum Natans y Sargassum Flutains, que
            se reconoce son los tipos de Sargazo que arriban al Caribe Mexicano, y su posible
            aprovechamiento. Se deberá valorar la pertinencia de legislar nacionalmente sobre
            el tema.
            </p>
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
export default {
  name: 'InfoView',
};
</script>

<style scoped>
main{
    margin: 0 !important;
    background: linear-gradient(to bottom right, rgb(178, 192, 203), rgb(3, 83, 120), rgb(109, 163, 199));
    font-family: 'Roboto', sans-serif;
    padding-bottom: 120px;
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
