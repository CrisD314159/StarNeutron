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
} from "../Styled_components/Article";
import VerticalLinearStepper from "../Styled_components/Article/stepper";
import { articles } from "../articles";

/*Article component structure*/
const Article = () => {
  const { id } = useParams(); /*Gets the id of an previously clicked article */
  const article = articles.filter(
    (element) => element.token === id
    /*Gets the required article*/
  );
  const articleBody = article[0].body; /*Gets the body of the article*/

  return (
    <div>
      {/*This section contains the background of the title*/}
      <ArticleBackgroundContainer background={article[0].image}>
        <ArticleBackgroundTitle>{article[0].title}</ArticleBackgroundTitle>
      </ArticleBackgroundContainer>
      {/*This contanis all related to article*/}
      <ArticleContainer>
        <StepperContainer>
          <StepperTitle>Good-To-Know</StepperTitle>
          <VerticalLinearStepper goodies={article[0].goodies} />
        </StepperContainer>
        {/*Contains the atire body of the article (not the stepper)*/}
        <ArticleBodyContainer>
          <ArticleBodyGenre>{article[0].genre.toUpperCase()}</ArticleBodyGenre>
          {articleBody.map((element, key) => {
            return (
              /*This maps the entire article with the sections contained in the object*/
              <ArticleBodyElement key={key}>
                <ArticleBodyTitle>{element.title}</ArticleBodyTitle>
                <ArticleBodyText>{element.body}</ArticleBodyText>
              </ArticleBodyElement>
            );
          })}
          <Link to={"../"} className="link">
            {"<<<"}Volver a inicio
          </Link>
        </ArticleBodyContainer>
      </ArticleContainer>
    </div>
  );
};

export default Article;
