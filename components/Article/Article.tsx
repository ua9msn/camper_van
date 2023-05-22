import React from 'react';
import cn from 'classnames/bind';
import styles from './Article.module.css';

const cx = cn.bind(styles);

interface Props {
	title: React.ReactNode;
	isMirrored?: boolean;
}

export const Article: React.FC<Props> = ({ children, title, isMirrored = false }: Props) => {
	return (
		<article
			className={cx({
				Article: true,
				left: !isMirrored,
			})}
		>
			<div className={styles.title}>{title}</div>
			<div className={styles.content}>{children}</div>
		</article>
	);
};
