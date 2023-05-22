import { Header } from './homepage/Header';
import { Article } from '@/components/Article';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Article title={<h1>ВРЕМЯ ПУТЕШЕСТВИЙ!</h1>}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Et ultrices neque ornare aenean euismod elementum nisi. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna.
				Sit amet luctus venenatis lectus. Urna condimentum mattis pellentesque id nibh tortor. Varius quam quisque id diam vel quam
				elementum pulvinar. Odio ut enim blandit volutpat maecenas. Neque convallis a cras semper auctor. Sit amet aliquam id diam
				maecenas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Gravida quis blandit turpis cursus. Nunc scelerisque
				viverra mauris in aliquam sem fringilla ut morbi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus
				semper. At auctor urna nunc id cursus metus aliquam eleifend. Tortor posuere ac ut consequat semper viverra nam libero
				justo. Sem nulla pharetra diam sit amet nisl suscipit. Id aliquet lectus proin nibh nisl. Pretium lectus quam id leo in
				vitae turpis massa sed. Urna id volutpat lacus laoreet non curabitur gravida arcu.
			</Article>
			<Article title={<h1>ГРАНИЦЫ ТОЛЬКО В ГОЛОВЕ</h1>} isMirrored>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Et ultrices neque ornare aenean euismod elementum nisi. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna.
				Sit amet luctus venenatis lectus. Urna condimentum mattis pellentesque id nibh tortor. Varius quam quisque id diam vel quam
				elementum pulvinar. Odio ut enim blandit volutpat maecenas. Neque convallis a cras semper auctor. Sit amet aliquam id diam
				maecenas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Gravida quis blandit turpis cursus. Nunc scelerisque
				viverra mauris in aliquam sem fringilla ut morbi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus
				semper. At auctor urna nunc id cursus metus aliquam eleifend. Tortor posuere ac ut consequat semper viverra nam libero
				justo. Sem nulla pharetra diam sit amet nisl suscipit. Id aliquet lectus proin nibh nisl. Pretium lectus quam id leo in
				vitae turpis massa sed. Urna id volutpat lacus laoreet non curabitur gravida arcu.
			</Article>
		</main>
	);
}
