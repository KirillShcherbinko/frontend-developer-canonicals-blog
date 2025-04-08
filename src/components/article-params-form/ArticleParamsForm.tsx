import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useEffect, useState } from 'react';
import { ClickProvider } from 'src/contexts/click/ClickProvider';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { defaultArticleState } from 'src/constants/articleProps';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType 
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useArticleState } from 'src/hooks/useArticleState';

export const ArticleParamsForm = () => {
	const { articleState, dispatchArticleState } = useArticleState();

	// Открытие и закрытие
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {setIsOpen(false)}, [articleState]);

	// Выпадающий список для шрифтов
	const [fontFamilyValue, setFamilyValue] = useState<OptionType>(articleState.fontFamilyOption);

	// Радиокнопки для размера шрифта
	const [fontSizeValue, setFontSizeValue] = useState<OptionType>(articleState.fontSizeOption);

	// Выпадоющий список для цвета шрифта
	const [fontColorValue, setFontColorValue] = useState<OptionType>(articleState.fontColor);

	// Выпадающий список для цвета фона
	const [backgroundColorValue, setBackgroundColorValue] = useState<OptionType>(articleState.backgroundColor);

	// Выпадающий список для ширины контента
	const [contentWidthValue, setContentWidthValue] = useState<OptionType>(articleState.contentWidth);
	
	return (
		<>
			<ClickProvider state={isOpen} onClick={toggle}><ArrowButton /></ClickProvider>
			<aside className={clsx(styles.container, isOpen ? styles.container_open : null)}>
				<form className={styles.form}>
					<Text
						size={31}
						weight={800}
						uppercase={true}
						family='open-sans'
					>
						Задайте параметры
					</Text>
					<Spacing size={50}/>
					<Select
						selected={fontFamilyValue}
						options={fontFamilyOptions}
						onChange={setFamilyValue}
						title='ШРИФТ'
					/>
					<Spacing size={50}/>
					<RadioGroup
						name='font-sizes'
						selected={fontSizeValue}
						options={fontSizeOptions}
						onChange={setFontSizeValue}
						title='РАЗМЕР ШРИФТА'
					/>
					<Spacing size={50}/>
					<Select
						selected={fontColorValue}
						options={fontColors}
						onChange={setFontColorValue}
						title='ЦВЕТ ШРИФТА'
					/>
					<Spacing size={50}/>
					<Separator/>
					<Spacing size={50}/>
					<Select
						selected={backgroundColorValue}
						options={backgroundColors}
						onChange={setBackgroundColorValue}
						title='ЦВЕТ ФОНА'
					/>
					<Spacing size={50}/>
					<Select
						selected={contentWidthValue}
						options={contentWidthArr}
						onChange={setContentWidthValue}
						title='ШИРИНА КОНТЕНТА'
					/>
					<Spacing size={207}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={() => 
							dispatchArticleState({
								type: 'setArticleState',
								payload: defaultArticleState
							})
						}/>
						<Button title='Применить' type='button' onClick={() => 
							dispatchArticleState({
								type: 'setArticleState',
								payload: {
									fontFamilyOption: fontFamilyValue,
									fontSizeOption: fontSizeValue,
									fontColor: fontColorValue,
									backgroundColor: backgroundColorValue,
									contentWidth: contentWidthValue
								}
							}
						)}/>
					</div>
				</form>
			</aside>
		</>
	);
};
