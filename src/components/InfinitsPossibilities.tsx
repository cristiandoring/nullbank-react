import users from '../assets/home/users.svg'
import purpleCard from '../assets/cards/purple-card.svg'
import circleDollarSignIcon from '../assets/icons/circle-dollar-sign.svg';
import earthIcon from '../assets/icons/earth.svg';
import userSign from '../assets/icons/user-round.svg';


export function InfinitsPossibilities() {
  return (
    <section className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 border-b border-t border-b-slate-200 border-t-slate-200">
      <article className='max-w-[50%] mt-16 px-6 md:mt-22 md:ml-28 md:px-0'>
        <h1 className='font-semibold font-outfit text-6xl text-slate-600 pb-6'>Transformando nulos em infinitas possibilidades.</h1>
        <p className='font-poppins font-normal text-[16px] pb-10 leading-6 text-slate-500'>
          Acreditamos que suas finanças podem ser tão simples quanto você
          deseja. Conheça nossas soluções inovadoras.
        </p>

        <p className='w-full max-h-10 gap-8 flex items-center'>
          <a href="#" className='max-h-full min-w-52 py-3 px-8 rounded-[8px] bg-primary200 text-primary500 font-semibold text-[16px] leading-4'>Abra sua conta gratuita</a>
          <a href="#" className='max-h-full min-w-28 font-poppins font-semibold text-[18px] text-slate-500'>Saiba mais</a>
        </p>

        <hr className='my-10 max-w-full text-slate-200'/>

        <figure className='max-w-48 flex flex-col gap-3 mb-20'>
          <img src={users} alt="several users" className='w-full h-11'/>
          <p className='font-poppins font-medium text-[14px] text-slate-400'>+7.8 milhões clientes</p>
        </figure>
      </article>
      <article className='bg-primary500 flex justify-center w-full'>
      
        <section className='relative'>
          <img src={purpleCard} alt="purple card in app nullbank" className='pt-22 w-96'/>
          
          {/*--Balão taxas*/}
        <section className='shadow-[#67748A33] shadow-lg absolute top-46 left-63 flex gap-2.5 w-52 h-12 bg-white rounded-[8px] px-2 py-1'>
          <article className='w-10 h-10 rounded-[8px] bg-primary200 flex items-center justify-center'>
            <img src={circleDollarSignIcon} alt={'dollar'} className='w-6 h-6'/> {/* Tamanho do ícone ajustado para caber */}
          </article>
            <article className=' flex justify-center items-center font-poppins font-medium text-[14px] text-slate-600'>
                {`Sem taxas abusivas`}
            </article>
        </section>
        
        {/*--Balão pagamentos*/}
        <section className='shadow-[#67748A33] shadow-lg absolute bottom-58 right-60 flex gap-2.5 w-72 h-12 bg-white rounded-[8px] px-2 py-1'>
          <article className='w-10 h-10 rounded-[8px] bg-primary200 flex items-center justify-center'>
            <img src={earthIcon} alt={'earth'} className='w-6 h-6'/> {/* Tamanho do ícone ajustado para caber */}
          </article>
            <article className=' flex justify-center items-center font-poppins font-medium text-[14px] text-slate-600'>
                {`Pagamentos em todo o mundo`}
            </article>
        </section>

        {/*--Balão user*/}
        <section className=' shadow-[#67748A33] shadow-lg bottom-25 left-71 absolute flex gap-2.5 w-60 h-12 bg-white rounded-[8px] px-2 py-1'>
          <article className='w-10 h-10 rounded-[8px] bg-primary200 flex items-center justify-center'>
            <img src={userSign} alt={'user'} className='w-6 h-6 relative'/> {/* Tamanho do ícone ajustado para caber */}
          </article>
            <article className=' flex justify-center items-center font-poppins font-medium text-[14px] text-slate-600'>
                {`100% pensado em você`}
            </article>
        </section>
        </section>


      </article>
    </section>
  );
}
