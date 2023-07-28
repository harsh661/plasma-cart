import Banner from './components/Banner';
import Featured from './components/product/Featured';

export default function Home() {
  return (
    <div className='px-5 lg:px-10 2xl:px-20'>
      <Banner isHero/>
      <Featured />
      <Banner />
    </div>
  )
}