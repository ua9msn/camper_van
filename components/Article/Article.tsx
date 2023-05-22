import React from 'react';
import cn from 'classnames/bind';
import styles from './Article.module.scss';

const cx = cn.bind(styles);

interface Props {
	title: React.ReactNode;
	bgsrc: string;
	isMirrored?: boolean;
}

export const Article: React.FC<Props> = ({ children, title, bgsrc, isMirrored = false }: Props) => {
	return (
		<article
			className={cx({
				Article: true,
				left: !isMirrored,
			})}
		>
			<div className={styles.title}
			     style={{
				     backgroundImage:`url(${bgsrc})`,
			     }}
			>{title}</div>
			<div className={styles.content}>{children}</div>
		</article>
	);
};
