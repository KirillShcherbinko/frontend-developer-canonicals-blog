import { ReactNode, useReducer } from "react";
import { defaultArticleState } from "src/constants/articleProps";
import ArticleStateContext from "./ArticleStateContext";
import { articleStateReducer } from "src/reducers/articleStateReducer";

interface ArticleStateProviderProps {
  children: ReactNode;
}

export const ArticleStateProvider = ({children}: ArticleStateProviderProps) => {
  const [articleState, dispatchArticleState] = useReducer(articleStateReducer, defaultArticleState);

  return (
    <ArticleStateContext.Provider value={{ articleState, dispatchArticleState }}>
      {children}
    </ArticleStateContext.Provider>
  )
}