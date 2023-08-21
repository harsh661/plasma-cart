import Banner from './components/Banner';
import { Footer } from './components/Footer';
import Categories from './components/categories/Categories';
import Featured from './components/product/Featured';

export default function Home() {
  return (
    <div className='w-full lg:px-10 max-w-[1400px] mx-auto'>
      <Banner isHero/>
      <Categories />
      <Featured />
      <Banner />
      <Footer />
    </div>
  )
}