import React, { FC } from 'react'
import Container from '@/components/container'
import NewsImage from '@/assets/img/news/news-1.png'
import Image from 'next/image'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { I18NextNS } from '@/constants/i18next'
import { translateAndParseHTML } from '@/helpers/i18n'

const NEWS_NS = I18NextNS.NEWS
const COMMON_NS = I18NextNS.COMMON

const NewsDetail: FC = () => {
  const { t } = useTranslation([NEWS_NS, COMMON_NS])

  const router = useRouter()
  const { newsId } = router.query
  // console.log(newsId)

  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <h1 className="md:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-white text-center">
            {translateAndParseHTML(NEWS_NS, 'TITLE')}
          </h1>
          <div className="flex flex-col md:flex-row gap-8 pb-20 md:pb-15">
            <div className="sm:w-2/5 w-full mx-auto md:mx-0">
              <Image
                src={NewsImage}
                alt="News"
                layout="responsive"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-3/5 max-w-150 md:pl-20 text-left self-center">
              <h2 className="text-primary xl:text-xl md:text-lg text-base">
                10
                เหตุผลที่ทำไมมอเตอร์ไซค์ดีกว่ารถยนต์แน่นอนหละครับว่าในส่วนของรถยนต์นั้นดีตรงสะดวกสบาย
                คุ้มแดดคุ้มฝน ตอนอากาศร้อนก็มีแอร์เย็นสบาย
              </h2>
              <p className="text-white md:text-sm text-xs font-light pt-8">
                Monday, October 12, 2020
              </p>
              <div className="border border-white mt-4 mb-6" />
              <p className="text-white md:text-base text-sm font-light md:font-regular">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>

          <div className="md:py-15 py-10 mb-5 ">
            <iframe
              className="sm:mx-auto mx-0 sm:w-[600px] w-full sm:h-[345px] h-[250px]"
              src="https://www.youtube.com/embed/w-RzNzsaZvs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          <div className="flex justify-between pt-8">
            <Button
              // onClick={() => previousNews()}
              type="link"
              className="text-white hover:text-primary xl:text-xl md:text-lg text-base gap-2 flex items-center"
            >
              <i className="icon-caret-left xl:text-2xl md:text-xl text-lg" />
              {t(`${COMMON_NS}:NEXT_BTN`)}
            </Button>
            <Button
              // onClick={() => nextNews()}
              type="link"
              className="text-white hover:text-primary xl:text-xl md:text-lg text-base gap-2 flex items-center"
            >
              {t(`${COMMON_NS}:PREV_BTN`)}
              <i className="icon-caret-right xl:text-2xl md:text-xl text-lg" />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [NEWS_NS, COMMON_NS])),
    },
  }
}

export default NewsDetail
