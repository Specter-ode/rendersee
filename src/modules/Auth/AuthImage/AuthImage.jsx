import s from './AuthImage.module.css';
import image_1x from 'assets/images/auth-image-1x.jpg';
import image_2x from 'assets/images/auth-image-2x.jpg';

const AuthImage = () => {
  return (
    <div className={s.imageBlock}>
      <img
        className={s.image}
        src={image_1x}
        srcSet={`${image_1x} 1x, ${image_2x} 2x`}
        alt={'interior'}
      />
    </div>
  );
};

export default AuthImage;
