import { Link, useParams } from "react-router-dom";
import {
  ArticleContainer,
  ArticleBackgroundContainer,
  ArticleBackgroundTitle,
  ArticleBodyContainer,
  ArticleBodyElement,
  ArticleBodyText,
  ArticleBodyTitle,
  StepperContainer,
  StepperTitle,
  ArticleBodyGenre,
  ArticleBackgroundLoading,
  ArticleBodyReference,
} from "../Styled_components/Article";
import VerticalLinearStepper from "../Styled_components/Article/stepper";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";



/*Article component structure*/
const Article = () => {
  const { id } = useParams(); /* Obtiene el id de un artículo previamente seleccionado */
  const [article, setArticle] = useState();
/* useEffect hook to get the article requested*/
  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await fetch(`https://star-api-production.up.railway.app/articles/${id}`);
        if(response.status === 404) setArticle(404)
          const data = await response.json();
          setArticle(data);
        
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    getArticle();
  }, [id]);


  /* while the article loads, this element will display */
  if (!article) {
    
    return <ArticleBackgroundLoading>
      <ArticleBackgroundTitle>Cargando...</ArticleBackgroundTitle>
    </ArticleBackgroundLoading>;
    
  }
  if(article === 404) redirect('/*')
  return (
    <div>
      {/*This section contains the background of the title*/}
      <ArticleBackgroundContainer background={article.article.image_url}>
        <ArticleBackgroundTitle>{article.article.article_title}</ArticleBackgroundTitle>
      </ArticleBackgroundContainer>
      {/*This contanis all related to article*/}
      <ArticleContainer>
        <StepperContainer>
          <StepperTitle>Good-To-Know</StepperTitle>
          <VerticalLinearStepper goodies={article.goodies} />
        </StepperContainer>
        {/*Contains the entire body of the article (not the stepper)*/}
        <ArticleBodyContainer>
          <ArticleBodyGenre>{article.article.genre.toUpperCase()}</ArticleBodyGenre>
          <ArticleBodyElement>
                <ArticleBodyTitle>Introducción</ArticleBodyTitle>
                <ArticleBodyText>{article.article.intro}</ArticleBodyText>
              </ArticleBodyElement>

              <ArticleBodyElement>
                <ArticleBodyTitle>{article.article.body_title}</ArticleBodyTitle>
                <ArticleBodyText>{article.article.body_content}</ArticleBodyText>
              </ArticleBodyElement>

           <ArticleBodyElement>
                <ArticleBodyTitle>Conclusión</ArticleBodyTitle>
                <ArticleBodyText>{article.article.conclusion}</ArticleBodyText>
              </ArticleBodyElement>
              <ArticleBodyElement>
                <ArticleBodyTitle>Referencias</ArticleBodyTitle>
                <ul>
                {article.references.map((element)=>{
                  return(
                    
                    <ArticleBodyReference>{element.reference_text}</ArticleBodyReference>
                  )
                  })

                }
                </ul>
              </ArticleBodyElement>
            
          <Link to={"../"} className="link">
            {"<<<"}Volver a inicio
          </Link>
        </ArticleBodyContainer>
      </ArticleContainer>
    </div>
  );
};

export default Article;
