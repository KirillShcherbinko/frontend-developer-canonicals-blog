import { useContext } from "react";
import ArticleStateContext, { ArticleStateContextType } from "src/contexts/article-state/ArticleStateContext";

export const useArticleState = () => {
  const context = useContext<ArticleStateContextType | null>(ArticleStateContext);
  if (!context) throw new Error('ArticleStateContext must be within ArticleStateProvider');
  return context;
}