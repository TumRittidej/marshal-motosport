import { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/container'
import NewsImage from '@/assets/img/news/news-1.png'
import { Button } from 'antd'
import Link from 'next/link'

const News: FC = () => {
  const newsImage = [
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
    {
      image: NewsImage,
      alternative: '',
      paragraph:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque quidem praesentium iusto maxime? Doloribus quaerat eos perferendis voluptatem totam iste',
    },
  ]
  return (
    <section className="bg-black pt-44">
      <div className="bg-2--cover py-20">
        <Container>
          <h1 className="pb-10 text-4xl font-semibold text-white text-center">
            ข่าวสาร<span className="text-primary">และกิจกรรม</span>
          </h1>
          <div className="grid grid-cols-4 gap-10">
            {newsImage.map((item, index) => {
              return (
                <Link href="/news-detail" key={index}>
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
                    <p className="pt-2 text-lg text-primary text-center">
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

export default News
