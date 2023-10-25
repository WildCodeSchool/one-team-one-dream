import "../styles/AboutUsStyle.scss";

function AboutUs() {
  return (
    <div className="Container_AboutUs">
      <h2 className="Title_AboutUs">A PROPOS...</h2>
      <p className="Description_AboutUs">
        Notre génération étant particulièrement concernée par le changement
        climatique, nous avons voulu nous inscrire dans une démarche responsable
        et écologique. Ainsi, permettre à chacun de connaître son empreinte
        carbone favorise la prise de conscience de son implication personnelle.
        Nous avons la ferme conviction que c’est la somme de belles actions et
        d’élans solidaires pour notre planète qui permettront d’évoluer vers une
        communauté toujours plus respectueuse de l’environnement.
      </p>
      <img
        className="Image_AboutUs"
        src="https://placehold.co/200x100.png"
        alt="Equipe des créateurs du site"
      />
    </div>
  );
}
export default AboutUs;
