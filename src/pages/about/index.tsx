import Image from 'next/image'
import { FC } from 'react'
import Container from '@/components/container'

import KnowsUsImage1 from '@/assets/img/knows-us/knows-us-1.png'
import KnowsUsImage2 from '@/assets/img/knows-us/knows-us-2.png'
import KnowsUsImage3 from '@/assets/img/knows-us/knows-us-3.png'
import Partner1 from '@/assets/img/knows-us/partner-1.png'
import Partner2 from '@/assets/img/knows-us/partner-2.png'
import Partner3 from '@/assets/img/knows-us/partner-3.png'
import Partner4 from '@/assets/img/knows-us/partner-4.png'
import Partner5 from '@/assets/img/knows-us/partner-5.png'
import Partner6 from '@/assets/img/knows-us/partner-6.png'
import Partner7 from '@/assets/img/knows-us/partner-7.png'
import Partner8 from '@/assets/img/knows-us/partner-8.png'
import Partner9 from '@/assets/img/knows-us/partner-9.png'
import Partner10 from '@/assets/img/knows-us/partner-10.png'
import Partner11 from '@/assets/img/knows-us/partner-11.png'
import Partner12 from '@/assets/img/knows-us/partner-12.png'
import Partner13 from '@/assets/img/knows-us/partner-13.png'
import Partner14 from '@/assets/img/knows-us/partner-14.png'
import Partner15 from '@/assets/img/knows-us/partner-15.png'
import Partner16 from '@/assets/img/knows-us/partner-16.png'
import Partner17 from '@/assets/img/knows-us/partner-17.png'
import Partner18 from '@/assets/img/knows-us/partner-18.png'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { I18NextNS } from '@/constants/i18next'
import { translateAndParseHTML } from '@/helpers/i18n'

const ABOUT_NS = I18NextNS.ABOUT
const COMMON_NS = I18NextNS.COMMON

const KnowsUs: FC = () => {
  const { t } = useTranslation(ABOUT_NS)
  const partnerImage = [
    {
      image: Partner1,
      alternative: 'Hyprepro',
    },
    {
      image: Partner2,
      alternative: 'Active',
    },
    {
      image: Partner3,
      alternative: 'High-flow air filter',
    },
    {
      image: Partner4,
      alternative: 'Nexzter',
    },
    {
      image: Partner5,
      alternative: 'SHAD',
    },
    {
      image: Partner6,
      alternative: 'GIVI',
    },
    {
      image: Partner7,
      alternative: 'Racing Bros',
    },
    {
      image: Partner8,
      alternative: 'Gale Speed',
    },
    {
      image: Partner9,
      alternative: 'Leo Vince',
    },
    {
      image: Partner10,
      alternative: 'Liqui Moly',
    },
    {
      image: Partner11,
      alternative: 'Barkbusters',
    },
    {
      image: Partner12,
      alternative: 'Ermax',
    },
    {
      image: Partner13,
      alternative: 'GT-R',
    },
    {
      image: Partner14,
      alternative: 'GT-RS',
    },
    {
      image: Partner15,
      alternative: 'Speedy',
    },
    {
      image: Partner16,
      alternative: 'Revolution',
    },
    {
      image: Partner17,
      alternative: 'Seri-Group',
    },
    {
      image: Partner18,
      alternative: 'Pirelli',
    },
  ]
  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15 overflow-hidden">
      <h1 className="xl:pt-20 pt-15 md:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary text-center">
        {translateAndParseHTML(ABOUT_NS, 'HEADING')}
      </h1>
      <div className="bg-1">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div
              className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0"
              data-aos="fade-right"
            >
              <Image
                src={KnowsUsImage1}
                layout="responsive"
                alt="Marshal Motosport Contact"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/4 text-center md:text-left">
              <h3 className="pb-4 xl:text-2xl text-xl">
                <span className="text-primary font-medium">
                  Marshal Motosport
                </span>
                <span className="text-white"> shop</span>
              </h3>
              <p className="text-white text-base font-light">
                {t('DESCRIPTION_1_1')}
                <br />
                <br />
                {t('DESCRIPTION_1_2')}
                <br />
                <br />
                {t('DESCRIPTION_1_3')}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-2--position-y-20">
        <Container>
          <div className="pt-15 flex flex-col-reverse md:flex-row gap-6 md:gap-12">
            <div className="w-full md:w-2/4 text-center md:text-left">
              <p className="text-white text-base font-light">
                {translateAndParseHTML(ABOUT_NS, 'DESCRIPTION_1_4')}
                <br />
                <br />
                {translateAndParseHTML(ABOUT_NS, 'DESCRIPTION_1_5')}
                <br />
                <br />
                {translateAndParseHTML(ABOUT_NS, 'DESCRIPTION_1_6')}
              </p>
            </div>
            <div
              className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0"
              data-aos="fade-left"
            >
              <Image
                src={KnowsUsImage2}
                layout="responsive"
                alt="Marshal Motosport Contact"
                loading="lazy"
              />
            </div>
          </div>
          <div className="pt-15 md:pb-20 pb-15 flex flex-col md:flex-row gap-6 md:gap-12">
            <div
              className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0"
              data-aos="fade-right"
            >
              <Image
                src={KnowsUsImage3}
                layout="responsive"
                alt="Marshal Motosport Contact"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/4 text-center md:text-left">
              <h3 className="pb-4 xl:text-2xl text-xl">
                <span className="text-primary font-medium">Environmental</span>
                <span className="text-white"> policy</span>
              </h3>
              <p className="text-white text-base font-light">
                {t('DESCRIPTION_2_1')}
                <br />
                <br />
                {t('DESCRIPTION_2_2')}
              </p>
            </div>
          </div>
          <h1 className="xl:text-4xl text-3xl font-semibold text-white text-center">
            Our
            <span className="text-primary"> Work</span>
          </h1>
          <div className="md:py-15 py-10 mb-5 bg-3">
            <iframe
              className="sm:mx-auto mx-0 sm:w-[600px] w-full sm:h-[345px] h-[250px]"
              src="https://www.youtube.com/embed/w-RzNzsaZvs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <h1 className="xl:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary text-center">
            Partners
          </h1>
          <div className="xl:pb-30 pb-25 flex flex-wrap justify-center lg:gap-x-16 lg:gap-y-10 gap-x-8 gap-y-6 items-center">
            {partnerImage.map((item, index) => {
              return (
                <div
                  key={index}
                  className="md:w-1/9 sm:w-1/8 w-1/5"
                  data-aos="flip-left"
                >
                  <Image
                    src={item.image}
                    alt={item.alternative}
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
      ...(await serverSideTranslations(locale!, [ABOUT_NS, COMMON_NS])),
    },
  }
}

export default KnowsUs
