
'use client';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." width={50} height={50}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." width={50} height={50}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." width={50} height={50}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." width={50} height={50}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." width={50} height={50}/>
      </Carousel>
    </div>
  );
}
