import SideBar from './components/navigation/sideBar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <SideBar />
      {/* <ContentList /> */}
      <p>aa</p>
    </div>
  );
}
