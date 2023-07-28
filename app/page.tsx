import Banner from './components/Banner';
import Categories from './components/categories/Categories';
import Featured from './components/product/Featured';

export default function Home() {
  return (
    <div className='px-5 lg:px-10 max-w-[1400px] mx-auto'>
      <Banner isHero/>
      <Categories />
      <Featured />
      <Banner />
    </div>
  )
}