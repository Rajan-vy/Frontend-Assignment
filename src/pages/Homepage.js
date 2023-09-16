import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeatureProduct } from '../services/api';
import ProductItem from '../components/ProductItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getFeatureProduct()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);


  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white">
        <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2000}>
          <div className='h-[600px]'>
            <img className='object-cover h-full w-full' src="https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?w=1380&t=st=1694866352~exp=1694866952~hmac=6475c7ef42e507b51eeffab4e1c90709e191ffcbec3616fd564a2b47d6689365" alt="Carousel Slide 1" />
          </div>
          <div className='h-[600px]'>
            <img className='object-cover h-full w-full' src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-background_1361-3705.jpg?w=1380&t=st=1694866575~exp=1694867175~hmac=880414f55e6b32bc95fccea8f739c20d9e1078f4e165669cdec34d98880f58ff" alt="Carousel Slide 1" />
          </div>
          <div className='h-[600px]'>
            <img className='object-cover h-full w-full' src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=1380&t=st=1694866619~exp=1694867219~hmac=b1d7e2c1a5b4740004aa47ee4030aa53174850bc75c8945a8142887e31d52067" alt="Carousel Slide 1" />
          </div>
        </Carousel>
      </header>

      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold">Shop the Latest Trends</h1>
        <p className="text-lg mt-2">Explore our collection of trendy products.</p>
      </div>

      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] pt-5 lg:grid-cols-4 px-[30px]">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col">
                <ProductItem product={product} />
              </div>
            )
            )}
          </div>
        </div>
      </section>

      <section className="bg-blue-500 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Shop?</h2>
          <p className="text-lg mb-8">Browse our wide range of products and grab the best deals!</p>
          <Link to="/products" className="bg-white text-blue-500 hover:bg-blue-700 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
