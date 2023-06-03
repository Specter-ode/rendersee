import { useEffect, useState } from 'react';
import s from './HomeBg.module.css';

import ImgBefore from '../../../assets/images/before.jpg';
import ImgAfter from '../../../assets/images/after.jpg';

const HomeBg = () => {
  const [leftContainerWidth, setLeftContainerWidth] = useState(75);
  const [start, setStart] = useState(false);


  useEffect(() => {
    console.log('start: ', start);
    let interval;
    if (start) {
      setLeftContainerWidth(25);
      interval = setInterval(() => {
        console.log('========выполнился интервал');
        setLeftContainerWidth(prevWidth => (prevWidth === 75 ? 25 : 75));
      }, 16000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <div className={s.container} onMouseEnter={() => setStart(true)}>
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
