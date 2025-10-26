import l1 from './assets/img/login/1.svg';
import l2 from './assets/img/login/2.svg';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <Image src={l2}
        alt="l2"
        className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
      />
      <Image src={l1} 
        alt="l1"
        className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
      />

      
    </div>
  );
}
