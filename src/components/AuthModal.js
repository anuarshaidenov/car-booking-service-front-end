/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import PrimaryButton from './PrimaryButton';

const AuthModal = ({ isLogin = true, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      console.log('make a post req to /login', JSON.stringify(data));
    } else {
      console.log('make a post req to /signup', JSON.stringify(data));
    }
  };

  return (
    <div className="bg-white text-black w-[95%] max-w-md rounded-xl p-4 md:p-8">
      <button
        type="button"
        className="text-amber-500 font-bold"
        onClick={closeModal}
      >
        x
      </button>
      <h2 className="text-center font-bold uppercase mb-4 md:text-2xl">
        {isLogin ? 'Login' : 'Sign up'}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center md:items-start gap-4 md:gap-7"
      >
        {!isLogin && (
          <input
            type="text"
            {...register('name', { required: true, maxLength: 50 })}
            placeholder="name"
            className="border w-full p-2 rounded-sm"
          />
        )}
        {errors.name?.type === 'required' && <p>Must provide a name</p>}
        <input
          type="email"
          {...register('email', { required: true, maxLength: 50 })}
          placeholder="Email"
          className="border w-full p-2 rounded-sm"
        />
        {errors.email?.type === 'required' && <p>Must provide an email</p>}
        <input
          type="password"
          {...register('password', { required: true, minLength: 6 })}
          placeholder="Password"
          className="border w-full p-2 rounded-sm"
        />
        {errors.password?.type === 'minLength' && (
          <p>Password must be at least 6 characters</p>
        )}
        {errors.password?.type === 'required' && <p>Must provide a password</p>}
        {!isLogin && (
          <input
            type="password"
            {...register('passwordConfirm', { required: true, maxLength: 50 })}
            placeholder="Confirm password"
            className="border w-full p-2 rounded-sm"
          />
        )}
        {errors.passwordConfirm?.type === 'required' && (
          <p>Must provide a password</p>
        )}
        <PrimaryButton btnType="submit">
          {isLogin ? 'Login' : 'Sign up'}
        </PrimaryButton>
      </form>
    </div>
  );
};

AuthModal.propTypes = {
  isLogin: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

AuthModal.defaultProps = {
  isLogin: true,
};

export default AuthModal;
