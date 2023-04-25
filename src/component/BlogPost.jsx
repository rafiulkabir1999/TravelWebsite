import React from 'react'

export default function BlogPost() {

 const Show = () => {
    document.getElementById('id').classList.toggle('max-h-28')
 }

  return (
    <div className='border-5 border-gray-500 relative pb-10 shadow rounded'>
       <span 
       onClick={Show}
       className='absolute bottom-2 right-3 text-orange-600 font-bold cursor-pointer'>
        Continue Reading
       </span>
    <div className='flex justify-between items-center'>
    <div className="flex flex-col ">
     <p className='font-bold text-md  px-6 pt-4 text-xl'>  I would be happy to share a travel story with you!</p>
      <span className='text-blue-300 text-sm px-6 '>
          by Nahid Ul Kabir
      </span>
      </div>
      <div className='p-2 text-gray-600 font-semibold  '>
          12/12/2023
      </div>
    </div>
      <p id='id' className='p-6  leading-8 overflow-hidden max-h-28 pb-10 '>
         I would be happy to share a travel story with you! Here's one that comes to mind:
          A few years ago, I traveled to Japan with some friends. It was my first time visiting the country, and I was excited to experience the culture, food, and sights.
          One of the highlights of the trip was visiting Kyoto, a beautiful city filled with temples, gardens, and historic sites. We spent several days exploring the city, visiting places like the Fushimi Inari Shrine, Kiyomizu-dera temple, and the Arashiyama bamboo forest.
          One of my favorite experiences in Kyoto was visiting a traditional Japanese tea house. We participated in a tea ceremony, which involved carefully preparing and serving matcha tea in a tranquil setting. It was a beautiful and calming experience, and it gave me a deeper appreciation for Japanese culture and traditions.
          Another memorable experience from the trip was taking a day trip to Hiroshima. We visited the Hiroshima Peace Memorial Museum, which was a sobering and emotional experience. It was a stark reminder of the devastating effects of war and the importance of peace and diplomacy.
          Overall, the trip to Japan was a wonderful adventure filled with new experiences and insights. I would highly recommend visiting this amazing country!
      </p>
  </div>
  )
}
