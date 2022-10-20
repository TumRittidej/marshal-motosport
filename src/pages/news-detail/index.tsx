import React from 'react'
import Container from '@/components/container'
import NewsImage from '@/assets/img/news/news-1.png'
import Image from 'next/image'
import { Button } from 'antd'

const index = () => {
  return (
    <section className="bg-black pt-44">
      <div className="bg-2--position-y-5 py-20">
        <Container>
          <h1 className="pb-10 text-4xl font-semibold text-white text-center">
            ข่าวสาร<span className="text-primary">และกิจกรรม</span>
          </h1>
          <div className="flex pt-10 gap-8">
            <div className="w-2/5">
              <Image
                src={NewsImage}
                alt="News"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="w-3/5">
              <h2 className="text-primary text-xl">
                10
                เหตุผลที่ทำไมมอเตอร์ไซค์ดีกว่ารถยนต์แน่นอนหละครับว่าในส่วนของรถยนต์นั้นดีตรงสะดวกสบาย
                คุ้มแดดคุ้มฝน ตอนอากาศร้อนก็มีแอร์เย็นสบาย
              </h2>
              <p className="text-white text-sm font-light pt-8">
                Monday, October 12, 2020
              </p>
              <div className="border border-white mt-4 mb-6" />
              <p className="text-white">
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

          <div className="flex justify-between pt-8">
            <Button
              type="link"
              className="text-white hover:text-primary text-xl gap-2 flex items-center"
            >
              <i className="caret-left-icon text-2xl" />
              <div>Back</div>
            </Button>
            <Button
              type="link"
              className="text-white hover:text-primary text-xl gap-2 flex items-center"
            >
              <div>Next</div>
              <i className="caret-right-icon text-2xl" />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default index
