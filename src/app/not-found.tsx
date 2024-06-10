import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900'>
      <h1 className='text-8xl font-bold text-red-400'>404</h1>
      <p className='text-4xl font-medium'>Page Not Found</p>
      <Link
        href='/'
        className='mt-4 text-xl text-blue-600 hover:underline cursor-pointer'
      >
        Go back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
