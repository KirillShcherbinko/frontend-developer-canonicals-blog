import { createContext, Dispatch } from 'react';
import { ArticleStateType } from 'src/constants/articleProps';

type ArticleActionType = { type: 'setArticleState'; payload: ArticleStateType };

export type ArticleStateContextType = {
	articleState: ArticleStateType;
	dispatchArticleState: Dispatch<ArticleActionType>;
};

const ArticleStateContext = createContext<ArticleStateContextType | null>(null);

export default ArticleStateContext;
