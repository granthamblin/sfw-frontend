import Image from 'next/image'
import logoImage from '../../public/images/sfw2.png'
import starImage from '../../public/images/shooting-star.png'
import TeamSlider from '../components/TeamSlider'

export default function HomePage() {

  return (
    <>
    <div className="bg-[#6EC0E5] h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-8xl text-[#1F457E] fadeIn">Students For Wishes UofT</h1>
        <h2 className="mt-10 text-3xl mb-20 fadeIn">The Happiness Campaign: Granting Wishes, Spreading Smiles</h2>
        <Image 
          src={logoImage}
          width={500} 
          height={500} 
          alt="logo"
        />
    </div>
    <div className='bg-[#C6E1F4] pt-10 pb-10 flex flex-col items-center justify-center'>
        <h1 className="font-bold text-8xl text-[#1F457E] ml-20 fadeIn">Who Are We?</h1>
      </div>
      <div className='bg-[#61BBE2] flex items-center justify-center p-10'>
        <div className="flex-1">
          <p className="text-l ml-20">
            Make-A-Wish Canada is an independently operating affiliate of Make-A-Wish international. We create life-changing wishes for children with critical illnesses, and we are on a quest to bring every eligible child's wish to life, because a wish is an integral part of a child's treatment journey. Research shows children who have wishes granted can build the physical and emotional strength they need to fight a critical illness. Make-A-Wish is the world’s leading children’s wish-granting organization, operating in 50 countries. Here in Canada, we serve children in every community from coast to coast to coast.
            Since 1983, Make-A-Wish Canada has granted over 37,000 wishes across the country, over 1,000 last year alone.
          </p>
        </div>
        <div className="flex-1 flex justify-center mr-5">
          <Image
            src={starImage}
            width={300}
            height={300}
            alt="star"
          />
        </div>
      </div>
      <div className='bg-[#C6E1F4] h-screen flex flex-col items-center justify-center'>
        <h1 className="font-bold text-8xl text-[#1F457E] ml-20 pt-10 pb-10 fadeIn">Meet the Team</h1>
        <TeamSlider />
      </div>
    </>
  );
}
