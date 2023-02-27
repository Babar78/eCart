import React from 'react'
import styles from './Featured.module.css'
import ProductCard from '../productCard/ProductCard'

export default function Featured() {
  return (
    <>
    <div className={`${styles.main}`}>
        <div className={`${styles.featured} mt-16`}>
            <h1 className={`${styles.mainHeading} text-gray-600`}>
                Featured Collection
            </h1>
            <div className='flex justify-center'>
                <div className="inline-flex rounded-md shadow-sm my-4" role="group">
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        JACKETS
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        VESTS
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        SUITS
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        SHIRTS
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        T-SHIRTS & POLOS
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                       OVERCOAT
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400">
                        JEANS
                    </button>
                </div>
            </div>
              <ProductCard/>

            {/* <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span class="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
            </blockquote> */}
        

        </div>
        <section class="pt-48 bg-white flex flex-col justify-center">
    <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
      <div class="-mt-20 flex justify-end">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1614584935799-2882f2ee56d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjB3ZWFyaW5nJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
      </div>
      <div class="flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1599132972297-823e09453a12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHN1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
      </div>
      <div class="-mt-64 flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
      </div>
      <div class="flex justify-start -mr-28 ml-28">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1625993051424-114a461d406a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvbG8lMjBzaGlydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
      </div>
      {/* <div class="-translate-y-60 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-gray-800 bg-opacity-60">
        <div class="space-y-4">
          <p class="text-5xl font-bold text-orange-400 tracking-tight">
          Comfortable and Stylish Sneakers
          </p>
          <p class="text-xl text-white">
          Step out in style with our comfortable and stylish sneakers. Made with high-quality materials, these sneakers offer a perfect combination of comfort and durability. The cushioned insole and soft, breathable upper provide all-day comfort, while the sturdy outsole ensures stability and grip. Available in a variety of colors and designs, these sneakers are sure to complement any outfit, whether you're running errands or hitting the gym. Whether you're looking for a casual shoe for everyday wear or a performance sneaker for your active lifestyle, our comfortable and stylish sneakers are the perfect choice.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 mt-12 py-8">
          <div>
            <p class="text-4xl font-bold text-black">
              2M+
            </p>
            <p class="text-sm text-black">
              people in the Apple supply chain covered by our health and safety standards in 2020
            </p>
          </div>
          <div>
            <p class="text-4xl font-bold text-black">
              170+
            </p>
            <p class="text-sm text-black">
              member companies of the Responsible Business Alliance given access to our COVID response tools
            </p>
          </div>
        </div>
      </div> */}
    </div>
        </section>

        <div className='mx-16 py-8 bg-gray-100 shadow rounded-lg text-center mt-8'>
            <h1 className='font-bold text-2xl text-gray-800'>
                Autumn is calling...30% off on all products
            </h1>
            <p className='text-xl mt-2'>
                Limited time only. Hurry up! <br />
                <span className='text-gray-400'>
                    (Online & In-Store)
                </span>
            </p>
        </div>

      
    </div>
    </>
  )
}
