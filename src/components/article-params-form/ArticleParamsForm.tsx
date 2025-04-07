import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';


import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { ClickProvider } from 'src/contexts/click/ClickProvider';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => {setIsOpen(!isOpen); console.log(isOpen)};

	return (
		<>
			<ClickProvider state={isOpen} onClick={toggle}><ArrowButton /></ClickProvider>
			<aside className={clsx(styles.container, isOpen ? styles.container_open : null)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
