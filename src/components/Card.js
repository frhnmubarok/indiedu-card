/* eslint-disable jsx-a11y/anchor-is-valid */
const Card = ({ index, cardImage, avatar }) => {
  return (
    <div key={index} className='w-[22.5rem] rounded-[10px] overflow-hidden shadow-xl mx-auto'>
      <div className='w-full h-[211px] overflow-hidden group'>
        <img
          src={cardImage}
          alt='Bahasa Indonesia'
          className='min-h-full object-center object-cover group-hover:scale-110 transition-transform duration-200'
        />
      </div>
      <div className='pt-[25px] pb-[28px] px-4'>
        <h3 className='text-[#092C4C] text-2xl font-bold'>Bahasa Indonesia</h3>
        <p className='mt-1.5 text-[#94A2B3] text-base'>Kelas | Sekolah Dasar</p>
        <div className='mt-[30px] flex items-center'>
          <div className='h-14 w-14 rounded-full overflow-hidden'>
            <img src={avatar} alt='' className='min-h-full object-center object-cover' />
          </div>
          <div className='ml-[13px]'>
            <p className='text-[#092C4C] text-xl font-semibold'>Cici Sang Putri</p>
            <p className='mt-1.5 text-[#94A2B3]'>Guru SDN 01 Pekanbaru</p>
          </div>
        </div>
        <div className='mt-[30px] flex items-center justify-between'>
          <p className='text-description'>Rp. 90.000</p>
          <a
            href='#'
            className='h-10 w-[120px] flex justify-center items-center text-[#003592] text-sm font-bold border-2 border-[#003592] rounded-[10px] hover:bg-[#003592] transition-all duration-200 ease-in-out hover:text-white'>
            Lihat Kelas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
