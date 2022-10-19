import Container from '@/components/container'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Button, Carousel, Form, Input, Upload } from 'antd'

import HomeBanner1 from '@/assets/img/home/home-banner-1.jpg'
import HomeBanner2 from '@/assets/img/home/home-banner-2.jpg'
import HomeBanner3 from '@/assets/img/home/home-banner-3.jpg'
import HomeBanner4 from '@/assets/img/home/home-banner-4.jpg'
import HomeImage from '@/assets/img/home/home-1.png'
import ProductImage1 from '@/assets/img/home/product-1.png'
import ProductImage2 from '@/assets/img/home/product-2.png'
import ProductImage3 from '@/assets/img/home/product-3.png'
import OurServiceImage1 from '@/assets/img/home/our-service-1.png'
import OurServiceImage2 from '@/assets/img/home/our-service-2.png'
import OurServiceImage3 from '@/assets/img/home/our-service-3.png'
import OurServiceImage4 from '@/assets/img/home/our-service-4.png'
import OurServiceImage5 from '@/assets/img/home/our-service-5.png'
import OurServiceImage6 from '@/assets/img/home/our-service-6.png'
import OurServiceImage7 from '@/assets/img/home/our-service-7.png'
import Link from 'next/link'

const Home: NextPage = () => {
  const productItems = [
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
  ]

  const ourServiceItems = [
    {
      image: OurServiceImage1,
      title: 'Standards',
      decsription: 'สินค้ามีคุณภาพและปลอดภัยสูงนำเข้าภายในประเทศและต่างประเทศ',
    },
    {
      image: OurServiceImage2,
      title: 'Great Design',
      decsription: 'แต่ละแบรนด์ที่นำเข้ามีดีไซน์ทันสมัย',
    },
    {
      image: OurServiceImage3,
      title: 'Optimal Choice',
      decsription: 'สินค้าของเรามีมากมายหลายยี่ห้อ',
    },
    {
      image: OurServiceImage4,
      title: 'Finest Quality',
      decsription:
        'ไม่ต้องห่วงเรื่องสินค้าว่าจะดีไหมเพราะเรานำเข้าแบรนด์ที่ได้รับการยอมรับแล้วว่าได้คุณภาพที่ดี',
    },
    {
      image: OurServiceImage5,
      title: 'Dealer',
      decsription: 'รับสมัครตัวแทนจำหน่ายทั่วประเทศ',
    },
    {
      image: OurServiceImage6,
      title: 'Time Saving',
      decsription: 'ประหยัดเวลาคุณได้ด้วยการสั่งซื้อจากตัวแทนจำหน่ายของเรา',
    },
    {
      image: OurServiceImage7,
      title: 'Best Support',
      decsription: 'หลังจากซื้อขายแล้วเรายังช่วยบริการหลังการขาย',
    },
  ]

  return (
    <section className="pt-44 bg-black">
      <div className="relative">
        <div className="absolute z-1 left-[55%] top-2/4 transform -translate-y-2/4 max-w-140">
          <p className="text-white text-2xl font-medium">WELCOME TO</p>
          <h1 className="text-primary text-5xl py-2 font-semibold">
            MARSHAL MOTORSPORT
          </h1>
          <p className="text-white text-2xl">
            จำหน่ายและติดตั้งอะไหล่แต่งรถจักรยานยนต์ออโตเมติก สกู๊ตเตอร์
            มินิไบค์ บิ๊กไบค์ และให้บริการหลังการขายแบบครบวงจร
          </p>
        </div>
        <Carousel autoplay className="h-[625px]" effect="fade">
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner1}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner2}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner3}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner4}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="bg-1">
        <Container>
          <div className="pt-15 pb-30 gap-12 flex items-center">
            <div className="w-2/4">
              <Image src={HomeImage} alt="Marshal Shop" layout="responsive" />
            </div>
            <div className="w-2/4">
              <h1 className="text-4xl font-semibold text-white">
                รู้จัก
                <span className="text-primary"> Marshal Motosport shop</span>
              </h1>
              <p className="pt-2 text-lg text-white">
                เราเป็นร้านค้าจำหน่ายสินค้าอะไหล่แต่งจักรยานยนต์
                ที่ครอบคลุมอุปกรณ์ต่างๆ บนรถ อุปกรณ์เอนกประสงค์ กล่องบรรทุก
                รวมทั้งเครื่องแต่งกาย สำหรับขับขี่เพื่อความปลอดภัย
              </p>
              <div className="pt-8">
                <Button
                  href="/know-us"
                  className="text-primary hover:text-black bg-black hover:bg-primary duration-200 border border-primary min-w-35"
                >
                  ดูเพิ่มเติม
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-2--cover">
        <Container>
          <h1 className="text-4xl font-semibold text-white text-center">
            Marshal
            <span className="text-primary"> shop</span>
          </h1>
          <div className="pt-15 grid grid-cols-4 gap-x-10 gap-y-6">
            {productItems.map((product, index) => {
              return (
                <div key={index} className="group cursor-pointer">
                  <Link href="/product-detail">
                    <a target="_blank">
                      <div className="group-hover:">
                        <Image
                          src={product.image}
                          alt={product.alternative}
                          layout="responsive"
                        />
                      </div>
                      <div className="text-primary text-center">
                        <p className="pt-4 text-lg">{product.paragraph}</p>
                        <span className="block py-2 text-xl font-bold">
                          {product.price}
                        </span>
                        <Button
                          icon={<i className="icon-cart text-xl" />}
                          className="text-black group-hover:text-primary bg-primary group-hover:bg-black duration-200 border border-primary min-w-45 inline-flex items-center justify-center gap-2"
                        >
                          <div>สั่งซื้อสินค้า</div>
                        </Button>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="pt-10 text-center">
            <Button className="text-primary hover:text-black bg-transparent hover:bg-primary duration-200 border border-primary min-w-35">
              ดูเพิ่มเติม
            </Button>
          </div>
          <h1 className="pt-30 text-4xl font-semibold text-white text-center">
            Our
            <span className="text-primary"> Service</span>
          </h1>
          {/* <div className="pt-15 grid grid-cols-4 gap-x-10 gap-y-12">
            {ourServiceItems.map((service, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="h-[80px] w-1/4 m-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="responsive"
                    />
                  </div>
                  <h3 className="text-white text-2xl pt-8">{service.title}</h3>
                  <p className="text-white text-lg pt-2">
                    {service.decsription}
                  </p>
                </div>
              )
            })}
          </div> */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 pt-15">
            {ourServiceItems.map((service, index) => {
              return (
                <div key={index} className="max-w-[270px] text-center">
                  <div className="h-[75px] w-1/4 m-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="responsive"
                    />
                  </div>
                  <h3 className="text-white text-2xl pt-6">{service.title}</h3>
                  <p className="text-white text-lg pt-2">
                    {service.decsription}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
      <h1
        className="pt-30 pb-10 text-4xl font-semibold text-white text-center"
        id="section-contact"
      >
        ติดต่อ
        <span className="text-primary">เรา</span>
      </h1>
      <div className="bg-primary py-18">
        <Container>
          <div className="flex gap-8">
            <div className="w-2/4">
              <h3 className="text-2xl font-medium">ร่วมงานกับเรา</h3>
              <Form layout="vertical" className="pt-6 max-w-150">
                <Form.Item label="ตำแหน่งที่ต้องการ">
                  <Input type="text" />
                </Form.Item>
                <Form.Item label="ชื่อ">
                  <Input type="text" />
                </Form.Item>
                <Form.Item label="นามสกุล">
                  <Input type="text" />
                </Form.Item>
                <Form.Item label="เบอร์ติดต่อ">
                  <Input type="tel" />
                </Form.Item>
                <Form.Item label="อีเมล">
                  <Input type="email" />
                </Form.Item>
                <Form.Item
                  label="แนบใบสมัครและประสบการณ์"
                  valuePropName="fileList"
                >
                  <Upload
                    type="drag"
                    listType="picture"
                    accept="image/jpg, application/pdf"
                    className="border border-black"
                  >
                    (รูปแบบไฟล์ที่ต้องการ เป็น .pdf หรือ.jpg เท่านั้น)
                  </Upload>
                </Form.Item>
                <Form.Item label="9 + 5 =">
                  <Input type="text" />
                  <p className="text-xs font-light text-right pt-1">
                    (กรุณากรอกตัวเลขผลลัพธ์จากด้านบน)
                  </p>
                </Form.Item>
                <Form.Item className="text-right">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="px-15 bg-black hover:bg-primary text-primary hover:text-black border border-black"
                  >
                    ส่ง
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="w-2/4">
              <h3 className="text-2xl font-medium pb-4">
                ที่ตั้ง Marshal Motosport shop
              </h3>
              <p className="text-lg font-semibold pb-4">
                การเดินทางมาร้าน สาขาเอกชัยบางบอน
              </p>
              <ul>
                <li className="flex items-center gap-4 pb-3">
                  <i className="icon-location-mark text-3xl" />
                  <p className="text-base">
                    เส้นทางที่ 1 ถนนกาญจนาภิเษก-พระรามสอง วิ่งจากถนนกาญจนาฯ
                    มุ่งหน้า พระราม2 เข้าสู่ถนนเอกชัย-บางบอน ริมถนน
                    ร้านติดกับทางเข้าซอยเอกชัย 82
                  </p>
                </li>
                <li className="flex items-center gap-4 pb-3">
                  <i className="icon-location-mark text-3xl" />
                  <p className="text-base">
                    เส้นทางที่ 2 จากถนนจอมทอง-บางบอน/จากถนนกัลปพฤกษ์ เลี้ยวขวา
                    มุ่งหน้าเข้าแยก บางบอ (จัสโก้บางบอน)
                    เลี้ยวซ้ายเข้าถนนเอกชัยมุ่งหน้า รพ.บางประกอก 8
                    กลับรถใต้สะพานหน้า รพ. เข้าสู่ถนนเอกชัย-บางบอน ริมถนน
                    ร้านติดกับทางเข้าซอยเอกชัย 82
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="icon-location-mark text-3xl" />
                  <p className="text-base">
                    เส้นทางที่ 3 จากพระราม 2 ข้ามสะพานจากถนนเทียนทะเล
                    ผ่านทางรถไฟ มุ่งหน้าเข้าแยก บางบอน (จัสโก้บางบอน)
                    เลี้ยวซ้ายเข้าถนนเอกชัยมุ่งหน้า รพ.บางประกอก8
                    กลับรถใต้สะพานหน้า รพ. เข้าสู่ถนนเอกชัย-บางบอน ริมถนน
                    ร้านติดกับทางเข้าซอยเอกชัย 82
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Home
