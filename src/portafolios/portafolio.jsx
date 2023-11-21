
import "./portafolio.css"
export const Portafolio = () => {
  
    
    
  
  
  
  
  return (
    <div>
    <div id="fondo"></div>
   
   <section id="content">
      <img src="../img/WhatsApp Image 2023-10-10 at 15.40.40.jpeg" alt="mi foto" id="mifoto"/>
      <h1 id="mi-nombre">Jaime Lorenzo</h1>
      <p id="soy">Joven inquieto con interés en conseguir una oportunidad laboral y de formación.</p>
      
       <div id="div_oculto">
       <h1>Mi <strong>Portafolios</strong></h1>
       <p>con este proyecto quiero demostrar mis aprendizajes obtenidos a traves de los diferentes cursos que he realizado. <br />
        Lo que pongo en practica es HTML , CSS , javaScript  y React 
       </p>
      </div>
      <hr></hr>
    </section>


    <section id="content">
    <p id="cabecera">Mis <strong>Certificados</strong></p>
    <a href="https://community.open-bootcamp.com/user/jaimepucela/certificaciones/8595be11-5a7b-4e9d-a467-03a8be34753b"><img src="../img/titulo html.png" alt="titulo html"
        id="titulo_html"/></a>
    <a href="https://community.open-bootcamp.com/user/jaimepucela/certificaciones/e8d3df17-cd27-4b64-bffa-27f3006d340f" target="_blank"><img src="../img/bootchamp_js.png" alt="bootchamp" id="bootchamp"/></a>
    <a href="https://www.freecodecamp.org/certification/JaimeLorenzo/responsive-web-design" target="_blank"><img src="../img/freecodecamp.png" alt="freecodecamp" id="freecode"/></a>
    <div id="a-cerca">
    
    <div id="mas-certificados">
    <p >Todos los certificados que tengo</p>
        <ul>
            <li>Cursos realizados desde YouTube y Udemy.</li>
            <li>Certificado de HTML y CSS :15 de Diciembre 2022.</li>
            <li>Certificado de javascript :9 de Noviembre 2022.</li>
            <li>Responsive Web Design : 21 de Octubre 2022.</li>
            <li>ESO : 7 de marzo de 2019.</li>
        </ul>
    </div>
</div>

<div className="clearfix">

</div>

<div id="background"></div>
    </section>

    <section id="content">
        <div id="all-content">
        <div id="aprender">
        <h1>De donde vengo y hacia donde  <strong>voy</strong></h1>
        </div>
        <div className="joven">
        <article>
            <p> Soy un joven de un municipio cerca de Valladolid . Me formé en programación lo que me ha permitido disfrutar de mi verdadera pasión . Todas mis formaciones me han permitido desarroyar capcidades como la creatividad, la constancia y la responsabilidad. <br></br>
            Actualmente me encuentro desarroyando mi creatividad a traves de diferentes proyectos informaticos para demostrar mi capacidad.</p>
        </article>
        </div>
        </div>
    </section>

    <section id="content">
    <div id="container-portafolio">
        <h1>Estos son <strong>mis</strong> portafolios</h1>
    </div>
    

    <div className="fotos">
        <a href="https://musical-chimera-f14a80.netlify.app/" target="_blank">
        <figure>
            <img src="../img/peluqueria.jpg" alt="mi proyecto de una peluquería" id="real"/>
            <div className="capa">
                <h3>Peluquería</h3>
            </div>
        </figure></a>
        
        <a href="https://codepen.io/Jaime-Lorenzo-Olmedo/pen/rNKOXQz" target="_blank">
    <figure>
    <img src="../img/real valladolid.jpg" alt="mi proyecto del real valladolid" id="real"/>
    <div className="capa">
    <h3>Real Valladolid</h3>
    </div>
    </figure></a>

<a href="https://codepen.io/Jaime-Lorenzo-Olmedo/pen/PoXVxqx" target="_blank">
            <figure>
                    <img src="../img/pokemons.png" alt="pokemon" id="nav-left"/>
                    <div className="capa">
                    <h3>Pokemon</h3>
                    </div>
             </figure></a> 
             </div>
</section>
<section id="content">
    <p id="encabezado-lenguajes">Estos son los <strong>Lenguajes</strong> que se utilizar</p>
    <div id="lenguajes">
        <div className="lenguas">
        <img src="../img/html.png" alt="htlm" />
        <p className="lenguaje">HTLM</p>
        </div>
        <div className="lenguas">
        <img src="../img/css.png" alt="" />
        <p className="lenguaje-1">CSS</p>
        </div>
        <div className="lenguas">
        <img src="../img/javascript.png" alt="" />
        <p className="lenguaje"> JAVASCRIPT</p>
        </div>
        <div className="lenguas">
        <img src="../img/jQuery.png" alt="" id="libreria" />
        <p className="lenguaje"> LIBRERIRA JQUERY</p>
        </div>
        <div className="lenguas">
        <img src="../img/React.svg.png" alt="" id="libreria" />
        <p className="lenguaje"> REACT</p>
        </div>
    </div>
    
</section>


<footer>
        <h2>Si te quieres poner en contacto conmigo aqui dejo mis redes sociales</h2>
        <p>Jaime Lorenzo &copy; </p>
        <div className="redessociales">
            
            <a href="https://www.linkedin.com/in/jaime-lorenzo-57584b164/" target="_blank"> <img src="../img/linquedin.png" id="linkedin" /></a>
            
           <a href="mailto:jaimeprogramador8@gmail.com" target="_blank"><img src="../img/email.png" id="correo" /></a>
        </div>
        <div>
        </div>
    </footer>




   </div>
  )
}
