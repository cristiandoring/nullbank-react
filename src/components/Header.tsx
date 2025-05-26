export function Header(){
    return(
        <header className="w-full h-20 flex justify-between px-16 items-center border-b border-b-slate-200">
            <h3 className="hover:cursor-pointer text-primary500 font-outfit font-bold text-2xl leading-4">Nullbank</h3>
            <nav>
                <ul className="flex gap-10 ">
                    <li className="hover:cursor-pointer font-poppins font-medium text-[16px] leading-4 text-slate-400">Início</li>
                    <li className="hover:cursor-pointer font-poppins font-medium text-[16px] leading-4 text-slate-400">Para você</li>
                    <li className="hover:cursor-pointer font-poppins font-medium text-[16px] leading-4 text-slate-400">Serviços</li>
                    <li className="hover:cursor-pointer font-poppins font-medium text-[16px] leading-4 text-slate-400">Contato</li>
                </ul>
            </nav>
            
            <section className="flex gap-2">
                <a href="#" className="font-poppins font-semibold text-[16px] leading-4  text-slate-400 px-8 py-3">
                    Cadastrar-se
                </a>

                <button className=" hover:cursor-pointer w-40 h-10 bg-primary500 text-white py-3 px-8 rounded-[8px] flex justify-center items-center font-semibold text-[16px]"> Fazer Login</button>
            </section>
        </header>
    )
}