import Image from 'next/image'
import Link from 'next/link';
import logo from '../../public/images/sfw.png'

export default function Navbar() {
    return (
        <div className="bg-[#0057B8] h-20 rounded-bl-md rounded-br-md flex flex-row items-center p-4">
            <Link href="/" passHref>
                <Image 
                  src={logo}
                  width={75} 
                  height={75} 
                  alt="logo"
                />
            </Link>
            <div className="ml-20 flex flex-row justify-between gap-20"> 
                <Link href="/" passHref><button className="text-white">About Us</button></Link>
                <Link href="/get-involved" passHref><button className="text-white">Get Involved</button></Link>
                <Link href="/donate" passHref><button className="text-white">Donate</button></Link>
                <Link href="/newsletter" passHref><button className="text-white">Newsletter</button></Link>
            </div>
        </div>
    )
}