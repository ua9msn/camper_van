import styles from './header.module.scss';

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.titleContainer}>
			<h1 className={styles.title}>ДОМ НА&nbsp;КОЛЁСАХ</h1>
			<h2 className={styles.subTitle}>ПОСТРОЕН В&nbsp;АНАПЕ</h2>
			<h2 className={styles.subTitle}>ПУТЕШЕСТВУЕ ГДЕ&nbsp;ХОЧЕТ</h2>
		</div>
	</header>
);
