import React, { FC } from 'react'
import Image from 'next/image'

import Container from '@/components/container'
import OurServiceImage1 from '@/assets/img/home/our-service-1.png'
import OurServiceImage2 from '@/assets/img/home/our-service-2.png'
import OurServiceImage3 from '@/assets/img/home/our-service-3.png'
import OurServiceImage4 from '@/assets/img/home/our-service-4.png'
import OurServiceImage5 from '@/assets/img/home/our-service-5.png'
import OurServiceImage6 from '@/assets/img/home/our-service-6.png'
import OurServiceImage7 from '@/assets/img/home/our-service-7.png'
import OurServiceHoverImage1 from '@/assets/img/home/our-service-hover-1.png'
import OurServiceHoverImage2 from '@/assets/img/home/our-service-hover-2.png'
import OurServiceHoverImage3 from '@/assets/img/home/our-service-hover-3.png'
import OurServiceHoverImage4 from '@/assets/img/home/our-service-hover-4.png'
import OurServiceHoverImage5 from '@/assets/img/home/our-service-hover-5.png'
import OurServiceHoverImage6 from '@/assets/img/home/our-service-hover-6.png'
import OurServiceHoverImage7 from '@/assets/img/home/our-service-hover-7.png'

import OurWork1 from '@/assets/img/service/our-work-1.png'
import OurWork2 from '@/assets/img/service/our-work-2.png'
import OurWork3 from '@/assets/img/service/our-work-3.png'
import OurWork4 from '@/assets/img/service/our-work-4.png'
import OurWork5 from '@/assets/img/service/our-work-5.png'
import OurWork6 from '@/assets/img/service/our-work-6.png'
import OurWork7 from '@/assets/img/service/our-work-7.png'
import OurWork8 from '@/assets/img/service/our-work-8.png'
import OurWork9 from '@/assets/img/service/our-work-9.png'
import OurWork10 from '@/assets/img/service/our-work-10.png'
import OurWork11 from '@/assets/img/service/our-work-11.png'
import OurWork12 from '@/assets/img/service/our-work-12.png'

const Service: FC = () => {
  const ourServiceItems = [
    {
      image: OurServiceImage1,
      imageHover: OurServiceHoverImage1,
      title: 'Standards',
      decsription: 'สินค้ามีคุณภาพและปลอดภัยสูงนำเข้าภายในประเทศและต่างประเทศ',
    },
    {
      image: OurServiceImage2,
      imageHover: OurServiceHoverImage2,
      title: 'Great Design',
      decsription: 'แต่ละแบรนด์ที่นำเข้ามีดีไซน์ทันสมัย',
    },
    {
      image: OurServiceImage3,
      imageHover: OurServiceHoverImage3,
      title: 'Optimal Choice',
      decsription: 'สินค้าของเรามีมากมายหลายยี่ห้อ',
    },
    {
      image: OurServiceImage4,
      imageHover: OurServiceHoverImage4,
      title: 'Finest Quality',
      decsription:
        'ไม่ต้องห่วงเรื่องสินค้าว่าจะดีไหมเพราะเรานำเข้าแบรนด์ที่ได้รับการยอมรับแล้วว่าได้คุณภาพที่ดี',
    },
    {
      image: OurServiceImage5,
      imageHover: OurServiceHoverImage5,
      title: 'Dealer',
      decsription: 'รับสมัครตัวแทนจำหน่ายทั่วประเทศ',
    },
    {
      image: OurServiceImage6,
      imageHover: OurServiceHoverImage6,
      title: 'Time Saving',
      decsription: 'ประหยัดเวลาคุณได้ด้วยการสั่งซื้อจากตัวแทนจำหน่ายของเรา',
    },
    {
      image: OurServiceImage7,
      imageHover: OurServiceHoverImage7,
      title: 'Best Support',
      decsription: 'หลังจากซื้อขายแล้วเรายังช่วยบริการหลังการขาย',
    },
  ]

  const ourWorkItems = [
    {
      image: OurWork1,
      alternative: 'Our Work',
    },
    {
      image: OurWork2,
      alternative: 'Our Work',
    },
    {
      image: OurWork3,
      alternative: 'Our Work',
    },
    {
      image: OurWork12,
      alternative: 'Our Work',
    },
    {
      image: OurWork5,
      alternative: 'Our Work',
    },
    {
      image: OurWork6,
      alternative: 'Our Work',
    },
    {
      image: OurWork7,
      alternative: 'Our Work',
    },
    {
      image: OurWork8,
      alternative: 'Our Work',
    },
    {
      image: OurWork9,
      alternative: 'Our Work',
    },
    {
      image: OurWork10,
      alternative: 'Our Work',
    },
    {
      image: OurWork11,
      alternative: 'Our Work',
    },
    {
      image: OurWork4,
      alternative: 'Our Work',
    },
  ]
  return (
    <section className="xl:pt-44 pt-36 bg-black">
      <div className="bg-2--position-y-20 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <h1 className="pb-15 xl:text-4xl text-3xl text-primary text-center font-semibold">
          บริการ
        </h1>
        <Container>
          <div className="flex flex-wrap justify-center xl:gap-14 gap-12">
            {ourServiceItems.map((service, index) => {
              return (
                <div
                  key={index}
                  className="xl:max-w-[270px] max-w-[250px] text-center group"
                >
                  <div className="h-[75px] w-1/4 m-auto relative">
                    <div className="group-hover:opacity-0 transition duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transform scale-105 transition duration-300">
                      <Image
                        src={service.imageHover}
                        alt={service.title}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="text-white group-hover:text-primary xl:text-2xl text-xl xl:pt-6 pt-4 transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white xl:text-lg text-base pt-2">
                    {service.decsription}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
        <h1 className="pt-20 xl:text-4xl text-3xl font-semibold text-white text-center">
          Our
          <span className="text-primary"> Work</span>
        </h1>
        <div className="py-15 bg-3">
          <iframe
            className="mx-auto"
            width="600"
            height="345"
            src="https://www.youtube.com/embed/w-RzNzsaZvs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <Container>
          <div className="m-auto columns-4 pt-5">
            {ourWorkItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="wrapper-image p-1 overflow-hidden relative group"
                >
                  <div className="absolute inset-1 bg-primary opacity-0 group-hover:opacity-20 z-1 transition duration-200" />
                  <Image
                    className="transform group-hover:scale-125 transition duration-200"
                    src={item.image}
                    alt="Our Work"
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Service
