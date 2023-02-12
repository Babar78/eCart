import React from 'react'

export default function ProductCard() {
    const cardInfo =[
        {image:"https://cf.shopee.co.id/file/09b084ea979115a9b84ab6a1a1425f5f",title:"GUCCI JACKET 1",price:"$65"},
        {image:"https://s.alicdn.com/@sc04/kf/U75e68f0a961d499ea8a4868fa717ede6P.jpg_300x300.jpg    ",title:"GUCCI JACKET 2",price:"$75"},
        {image:"https://images-eu.ssl-images-amazon.com/images/I/61lCaTXvyfL._AC_UL330_SR330,330_.jpg",title:"GUCCI JACKET 3",price:"$85"},
        {image:"https://ae01.alicdn.com/kf/Hbe69d516859a417ba044ef67aa88b8b49.jpg?width=790&height=905&hash=1695",title:"GUCCI JACKET 4",price:"$95"},
        {image:"https://ae01.alicdn.com/kf/HTB1yHirXXzsK1Rjy1Xbq6xOaFXa2/Mountainskin-Winter-Men-Jacket-2021-Brand-Casual-Mens-Jackets-And-Coats-Thick-Parka-Men-Outwear-6XL.jpg",title:"GUCCI JACKET 5",price:"$105"},
        {image:"https://static-01.daraz.pk/p/bc2bad088c7bc9eac8607526f14ac098.jpg",title:"GUCCI JACKET 6",price:"$115"}
    ];
    // const renderCard=(card,index)=>{
    //     return(
    //         <div className='flex flex-col w-80 justify-center items-center shadow-md py-4 my-8 rounded-lg' key={index}>
    //                 <h1 className='text-orange-400 font-bold text-xl'>
    //                   {card.title}
    //                 </h1>
    //                 <p className='uppercase text-gray-400'>
    //                   THE BEST SHOES IN THE MARKETPLACE
    //                 </p>
    //                 <div class="prod-img w-80">
    //                   <img src={card.image}
    //                       class="w-full object-cover object-center" />
    //                 </div>
    //                 <div class="prod-info grid gap-5">
    //     <div>
    //       <ul class="flex flex-row justify-center items-center">
    //         <li class="mr-4 last:mr-0">
    //           <span
    //                 class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
    //             <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
    //           </span>
    //         </li>
    //         <li class="mr-4 last:mr-0">
    //           <span
    //                 class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //             <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
    //           </span>
    //         </li>
    //         <li class="mr-4 last:mr-0">
    //           <span
    //                 class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //             <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
    //           </span>
    //         </li>
    //         <li class="mr-4 last:mr-0">
    //           <span
    //                 class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //             <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
    //           </span>
    //         </li>
    //       </ul>
    //     </div>
    //     <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
    //       <p class="font-bold text-xl">{card.price}</p>
    //       <button
    //               class="ml-8 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
    //         to cart</button>
    //     </div>
    //   </div>
    // </div>
    //     )
    // };
    return (
        <div className='flex flex-wrap gap-x-16 w-full justify-center px-16'>
              {cardInfo.map(
              (card,index)=>
              {
                return(
                    <div className='flex flex-col w-80 justify-center items-center shadow-md py-4 my-8 rounded-lg' key={index}>
                            <h1 className='text-orange-400 font-bold text-xl'>
                              {card.title}
                            </h1>
                            <p className='uppercase text-gray-400'>
                              THE BEST SHOES IN THE MARKETPLACE
                            </p>
                            <div class="prod-img w-80">
                              <img src={card.image}
                                  class="w-full object-cover object-center" />
                            </div>
                            <div class="prod-info grid gap-5">
                <div>
                  <ul class="flex flex-row justify-center items-center">
                    <li class="mr-4 last:mr-0">
                      <span
                            class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                        <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                            class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                            class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                            class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p class="font-bold text-xl">{card.price}</p>
                  <button
                          class="ml-8 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                    to cart</button>
                </div>
              </div>
            </div>
                )
            }
              )}
        </div>
  )
}
