import { Puff } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.loader}>
    <Puff height="50" width="50" color="#3f51b5" />
  </div>
);

export default Loader;
