
import s from './HomeTextBlock.module.css';
import CustomLink from 'components/CustomLink/CustomLink';

const HomeTextBlock = () => {

  return (
      <div className={s.container}>
        <h1 className={s.title}>Create your dream space</h1>
        <p className={s.text}>
          Lorem ipsum dolor sit amet consectetur. Pharetra tristique mauris scelerisque nisl fusce lobortis.
        </p>
        <CustomLink
          to="/login"
          text="Get Started"
          painted={true}
          padding="12px 32px"
          fontSize="16px"
          fontWeight="500"
        />
      </div>
  );
};

export default HomeTextBlock;
