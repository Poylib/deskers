import Link from 'next/link';
import IconGithub from '../components/assets/icon/Github';


export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center'>
      <div className='flex justify-center gap-4'>
        <Link href='https://deskers.io' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2024. <span className='font-semibold'>Deskers</span> all rights reserved.
      </div>
    </footer>
  );
};
