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
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js'
import { useTranslation } from 'next-i18next'
import { I18NextNS } from '@/constants/i18next'

const Service: FC = () => {
  const { t } = useTranslation(I18NextNS.SERVICE)
  const ourServiceItems = [
    {
      image: OurServiceImage4,
      imageHover: OurServiceHoverImage4,
      title: t('TITLE_POLICY_4'),
      decsription: t('PARAGRAPH_SERVICE_4'),
    },
    {
      image: OurServiceImage1,
      imageHover: OurServiceHoverImage1,
      title: t('TITLE_POLICY_1'),
      decsription: t('PARAGRAPH_SERVICE_1'),
    },
    {
      image: OurServiceImage6,
      imageHover: OurServiceHoverImage6,
      title: t('TITLE_POLICY_6'),
      decsription: t('PARAGRAPH_POLICY_6'),
    },
    {
      image: OurServiceImage7,
      imageHover: OurServiceHoverImage7,
      title: t('TITLE_POLICY_7'),
      decsription: t('PARAGRAPH_POLICY_7'),
    },
    {
      image: OurServiceImage2,
      imageHover: OurServiceHoverImage2,
      title: t('TITLE_POLICY_2'),
      decsription: t('PARAGRAPH_POLICY_2'),
    },
    {
      image: OurServiceImage3,
      imageHover: OurServiceHoverImage3,
      title: t('TITLE_POLICY_3'),
      decsription: t('PARAGRAPH_POLICY_3'),
    },
    {
      image: OurServiceImage5,
      imageHover: OurServiceHoverImage5,
      title: t('TITLE_POLICY_5'),
      decsription: t('PARAGRAPH_POLICY_5'),
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
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="bg-2--position-y-20 xl:pt-20 pt-15 xl:pb-30 md:pb-25 pb-15">
        <h1 className="md:pb-15 pb-10 xl:text-4xl text-3xl text-primary text-center font-semibold">
          {t('TITLE')}
        </h1>
        <Container>
          <div className="flex flex-wrap justify-center xl:gap-14 gap-12">
            {ourServiceItems.map((service, index) => {
              return (
                <div key={index} className="w-[250px] text-center group">
                  <div className="md:h-[75px] h-[60px] md:w-1/4 w-1/5 m-auto relative">
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
                  <h3 className="text-white group-hover:text-primary xl:text-2xl md:text-xl text-lg xl:pt-6 pt-4 transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white xl:text-lg md:text-base text-sm pt-2">
                    {service.decsription}
                  </p>
                </div>
              )
            })}
          </div>

          <h1 className="md:pt-15 pt-10 xl:text-4xl text-3xl text-primary text-center font-semibold">
            {t('HEADING_POLICY')}
          </h1>

          <ul className="md:text-base text-sm text-white grid md:grid-cols-2 grid-cols-1 md:pt-8 pt-4">
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_1')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_2')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_3')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_4')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_5')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_6')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_7')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_8')}
            </li>
            <li className="pb-2">
              <i className="icon-check-service text-primary pr-2 text-2xl" />
              {t('PARAGRAPH_SERVICE_9')}
            </li>
          </ul>

          <div className="m-auto md:columns-4 sm:columns-3 columns-1 xl:pt-20 pt-15">
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['service', 'common'])),
    },
  }
}

export default Service
