import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useClick } from 'src/hooks/useClick';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = () => {
	const { state, onClick }:  { state: boolean; onClick: () => void }  = useClick();

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(styles.container, state ? styles.container_open : null)}
		>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, state ? styles.arrow_open : null)} />
		</div>
	);
};
