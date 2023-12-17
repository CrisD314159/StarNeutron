import {
  MainHeader,
  HeaderAboutTitle,
  HeaderAboutDescription,
  ContentContainer,
  ContentTextContainer,
  TextComponentContainerLeft,
  TextComponentContainerRight,
  TextComponentTitle,
  TextComponentBody,
  CreatorNameDiv,
  CreatorNameText,
} from "../Styled_components/About";

const About = () => {
  let counter = 0;
  const textContent = [
    {
      title: "Misión",
      body: "El propósito en StarNeutron es cultivar el conocimiento mediante artículos simples y sencillos de entender, pero con información confiable y concisa. Nuestro compromiso es que cualquier persona, desde cualquier parte y con acceso a internet, sin importar su nivel de conocimiento, pueda adentrarse en temas científicos, incluso complejos, de una manera comprensible. Creemos que el diseño facilita el entendimiento, por eso cuidamos hasta el más mínimo detalle para que, mediante un diseño fresco y minimalista, sea más simple el aprendizaje y más grande la curiosidad intelectual, haciendo que el conocimiento científico sea accesible y emocionante para todos.    ",
    },
    {
      title: "Visión",
      body: "En StarNeutron, aspiramos a convertirnos en un sitio referente para aquellos que buscan comprender la ciencia de una manera práctica. Visualizamos un mundo donde aprender ciencia sea fácil e interesante para todos, sin importar títulos, idiomas o etnias. Nos esforzamos por ser una plataforma cada vez más robusta, reflejando la transparencia y fiabilidad a la que nos comprometemos. ",
    },
    {
      title: "Lo que hacemos",
      body: "Queremos entregar información verídica y de primera mano, por eso seleccionamos cuidadosamente las fuentes y los artículos en los que nos basamos. Lo que buscamos es traducir y reescribir esta información, de manera que el artículo resultante sea una información confiable y fácil de entender acompañado de un diseño minimalista y amigable. Nos empeñamos en NO infringir ninguna norma de derechos de autor, ya que gracias a estos valiosos autores es que podemos traer información en pro de cumplir nuestra misión. ",
    },
    {
      title: "Por qué cultivar el interés por el conocimiento?",
      body: "Hoy en día, vivimos en una sociedad globalizada, con acceso al conocimiento nunca antes visto, lo que a su vez provoca una gran cantidad de desinformación y contenido que no nutre ni incentiva el conocimiento y el aprendizaje. Creemos que cultivar el interés por el conocimiento y el aprendizaje permite que una persona genere pensamientos más críticos, explore los límites de sus propias capacidades y, lo más importante, se cuestione el porqué de las cosas, generando un impacto en el desarrollo personal y en la divulgación de la ciencia. Esto permite que cada vez estemos más cerca de ser una sociedad llena de conocimiento y nuevas ideas por explorar. ",
    },
  ];
  return (
    <div>
      <MainHeader>
        <HeaderAboutTitle>¿QUÉ ES StarNeutron?</HeaderAboutTitle>
        <HeaderAboutDescription>
          Conoce lo que hay detrás y las motivaciones de este proyecto
        </HeaderAboutDescription>
      </MainHeader>
      <ContentContainer>
        <ContentTextContainer>
          {textContent.map((obj, index) => {
            if (counter % 2 === 0) {
              counter++;
              return (
                <TextComponentContainerLeft key={index}>
                  <TextComponentTitle>{obj.title}</TextComponentTitle>
                  <TextComponentBody>{obj.body}</TextComponentBody>
                </TextComponentContainerLeft>
              );
            } else {
              counter++;
              return (
                <TextComponentContainerRight key={index}>
                  <TextComponentTitle>{obj.title}</TextComponentTitle>
                  <TextComponentBody>{obj.body}</TextComponentBody>
                </TextComponentContainerRight>
              );
            }
          })}
        </ContentTextContainer>
      </ContentContainer>
      <CreatorNameDiv>
        <CreatorNameText>
          Created by <a href="https://crisdev.web.app/">Crisdev</a>
        </CreatorNameText>
      </CreatorNameDiv>
    </div>
  );
};

export default About;
