import s from './ErrorMassage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={s.error}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
