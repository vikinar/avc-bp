import Navigation from "../Navigation";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";

import style from './style'

const Layout = ({children}) => {
    return (
        <main className="md:flex justify-center w-full h-full">
            <section className="top flex fixed justify-between md:hidden w-full h-16 bg-white top-0 border-b border-gray-500">
                <div className="top-left flex items-center w-6/12 sm:4/12">
                    <Navigation/>
                    <div className="logo flex items-center ml-1">
                        <Logo/>
                    </div>
                </div>
                <div>
                </div>
            </section>
            <aside className="w-2/12 hidden md:block">
                <div className="flex justify-start md:justify-around xl:justify-start items-center">
                    <Navigation/>
                    <div className="logo flex ml-1 items-center">
                        <Logo/>
                        <div className="logo-title hidden md:block flex-col ml-2 items-center justify-center items-center">
                            <h2 className='text-lg m-0 font-bold text-blue-900'>AVC</h2>
                        </div>
                    </div>
                </div>
            </aside>
            {children}
            <div className='w-2/12 flex m-3 hidden md:block'>
                <button className='bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full'>Login</button>
            </div>
            <style jsx>{style}</style>
        </main>

    )
}

export default Layout