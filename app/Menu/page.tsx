import { HiAcademicCap, HiOutlineHome, HiBugAnt } from 'react-icons/hi2'
export default function Menu() {
    return (
        <>
        <div className="flex bg-amber-500 justify-between pl-20 pr-20 pt-2 pb2">
        <p className="inline-flex items-center">Bug<HiBugAnt size={70}/> ANT</p>
        <ul className="flex items-center">
            <HiOutlineHome />
            <li className="inline-flex pr-10 pl-2 items-center"> Menu</li>
            <li className="inline-flex pr-10"> Menu</li>
            <HiAcademicCap />
            <li className="inline-flex pr-10 pl-2 ">Menu</li>
            <li className="inline-flex pr-10"> Menu</li>
           
        </ul>
        </div>
        </>

    )
}