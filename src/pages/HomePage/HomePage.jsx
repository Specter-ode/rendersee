import s from './Homepage.module.css';
import HomeBg from 'modules/Home/HomeBg/HomeBg';
import HomeHeader from 'modules/Home/HomeHeader/HomeHeader';
import HomeTextBlock from 'modules/Home/HomeTextBlock/HomeTextBlock';

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main className={s.container}>
        <HomeBg />
        <HomeTextBlock />
      </main>
    </>
  );
};

export default HomePage;
