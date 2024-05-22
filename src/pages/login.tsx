import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from './firebase';
import { FieldValues } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      await signInWithEmailAndPassword(auth, data.email as string, data.password as string);
      setLoginSuccess(true);
      setLoginError(null);
    } catch (error: any) {
      console.error('Login error:', error.message);
      setLoginError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-800"
            />
            {errors.email && <span className="text-red-500">Email is required and must be valid</span>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              {...register('password', { required: true, minLength: 8 })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-800"
            />
            {errors.password && errors.password.type === 'required' && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className="text-red-500">Password must be at least 8 characters long</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {loginError && <div className="text-red-500 mt-4">{loginError}</div>}

        {loginSuccess && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md z-10">
            <h2 className="text-xl font-bold mb-2">Login Successful!</h2>
            <p>You have successfully logged in.</p>
            <button onClick={() => setLoginSuccess(false)} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
