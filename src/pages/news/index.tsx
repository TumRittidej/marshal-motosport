import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsImage from '@/assets/img/news/news-1.png'
import Container from '@/components/container'
import { Button } from 'antd'
import { MS_NEWS } from '@/constants/url'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const News: FC = () => {
  const newsImage = [
    {
      id: 1,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 2,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 3,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 4,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 5,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 6,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 7,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 8,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 9,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 10,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 11,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
    {
      id: 12,
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem',
    },
  ]
  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--cover xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <h1 className="md:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-white text-center">
            ข่าวสาร<span className="text-primary">และกิจกรรม</span>
          </h1>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:gap-6 lg:gap-x-10">
            {newsImage.map((item, index) => {
              return (
                <Link href={`${MS_NEWS}/${item.id}`} key={index}>
                  <a>
                    <div className="overflow-hidden relative group">
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 z-1 transition duration-200" />
                      <Image
                        className="transform group-hover:scale-125 transition duration-200"
                        src={item.image}
                        alt={item.alternative}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                    <p className="pt-2 xl:text-lg text-base text-primary text-center">
                      {item.paragraph}
                    </p>
                  </a>
                </Link>
              )
            })}
          </div>
          <div className="pt-14 text-center">
            <Button className="text-primary hover:text-black bg-transparent hover:bg-primary duration-200 border border-primary min-w-35">
              ดูเพิ่มเติม
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
      ...(await serverSideTranslations(locale!, ['news', 'common'])),
    },
  }
}

export default News
