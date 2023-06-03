import { useEffect, useState } from 'react';
import s from './HomeBg.module.css';

import ImgBefore from '../../../assets/images/before.jpg';
import ImgAfter from '../../../assets/images/after.jpg';

const HomeBg = () => {
  const [leftContainerWidth, setLeftContainerWidth] = useState(80);

  useEffect(() => {
    setLeftContainerWidth(20);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftContainerWidth(prevWidth => (prevWidth === 80 ? 20 : 80));
    }, 15000);

    return () => clearInterval(interval);
  }, [leftContainerWidth]);

  return (
    <div className={s.container}>
      <div className={s.leftContainer} style={{ width: `${leftContainerWidth}vw` }}>
        <img className={s.leftImage} src={ImgBefore} alt="Interior before" width={880} height={820} />
      </div>
      <div className={s.rightContainer}>
        <img className={s.rightImage} src={ImgAfter} alt="Interior after" width={880} height={820} />
      </div>
    </div>
  );
};

export default HomeBg;
