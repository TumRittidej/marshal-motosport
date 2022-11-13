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

const KnowsUs: FC = () => {
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
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <h1 className="xl:pt-20 pt-15 md:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary text-center">
        รู้จักเรา
      </h1>
      <div className="bg-1">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0">
              <Image
                src={KnowsUsImage1}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
            <div className="w-full md:w-2/4 text-center md:text-left">
              <h3 className="pb-4 xl:text-2xl text-xl">
                <span className="text-primary font-medium">
                  Marshal Motosport
                </span>
                <span className="text-white"> shop</span>
              </h3>
              <p className="text-white xl:text-xl text-base font-light">
                <span className="text-primary">Marshal Motosport Shop</span>{' '}
                เป็นร้านค้าจำหน่ายสินค้าอะไหล่แต่งจักรยานยนต์
                ที่ครอบคลุมอุปกรณ์ต่างๆบนรถ อุปกรณ์เอนกประสงค์ กล่องบรรทุก
                รวมทั้งเครื่องแต่งกายสำหรับขับขี่เพื่อความปลอดภัย อาทิ
                หมวกกันน็อค เสื้อการ์ด ถุงมือ ฯลฯ
                เพื่อรองรับการขับขี่ในชีวิตประจำวัน กิจกรรมการเดินทางออกทริป
                เพิ่มความสะดวกสบาย (อุปกรณ์สัมภาระ) การแต่งสวยงาม (จัดสภาพ)
                และเพิ่มประสิทธิภาพ (ระบบเบรก)
                <br />
                <br />
                นอกจากนี้ เรามีความชำนาญในการแก้ไขปรับปรุง
                ระบบช่วงล่างลดการสั่นสะเทือน
                ด้วยมาตรฐานที่ดีลเลอร์ได้รับการอบรมจากแบรนด์โช๊คอัพชั้นนำ เช่น
                HYPERPRO OHLIN YSS PROFENDER
                <br />
                <br />
                รวมไปถึงการให้บริการเซอร์วิสได้มาตรฐาน
                ทั้งการถอดประกอบที่ต้องใช้อุปกรณ์คุณภาพสูง มีความละเอียด
                และใส่ใจระมัดระวังกับรถของลูกค้าอย่างกับเป็นรถของเราเอง
                รวมถึงการมีบริการหลังการขายให้ครบวงจร
                <br />
                <br />
                สินค้าทุกชิ้นได้รับประกันคุณภาพจากแบรนด์ผู้ผลิตโดยตรง
                เรามีสินค้าเข้าใหม่สม่ำเสมอ
                และสามารถเลือกแต่งรถของคุณได้ตามต้องการ
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-2--position-y-20">
        <Container>
          <div className="pt-15 flex flex-col-reverse md:flex-row gap-6 md:gap-12">
            <div className="w-full md:w-2/4 text-center md:text-left">
              <p className="text-white xl:text-xl text-base font-light">
                <span className="text-primary">คุณชัย </span>
                เจ้าของร้านมีความชื่นชอบและรักในการขับขี่
                มีประสบการณ์ทำงานในบริษัทที่ผลิตชิ้นส่วนยานยนต์มานานกว่า 20 ปี
                ภายหลังเข้ากลุ่มบิ๊กไบค์
                และเริ่มต้นจากการช่วยเหลือเพื่อนสมาชิกจัดหาอะไหล่แต่งรถ
                นอกจากนี้ได้รับการช่วยเหลือจาก Partner Distributor
                ผู้นำเข้าโช๊คคุณภาพสูงจากยุโรป ถ่ายทอดเทคนิคเกี่ยวกับผลิตภัณฑ์
                จนสามารถจำหน่ายสินค้าและติดตั้งในราคาย่อมเยาว์ให้กับเพื่อนสมาชิก
                โดยเฉพาะในกลุ่มรถออโตเมติกและบิ๊กสกู๊ตเตอร์
                ภายหลังได้รับการสนับสนุนให้เปิดจำหน่ายและบริการหน้าร้าน
                โดยใช้ชื่อว่า บริษัท มาร์แชล โมโตสปอร์ท จำกัด
                <br />
                <br />
                มาร์แชล หมายถึง ผู้นำ หรือแม่ทัพ ซึ่งทางคุณชัย ให้นิยามว่า
                ผู้ขับขี่ เมื่อขับขี่รถของตน
                ก็เหมือนผู้นำที่ต้องการไปสำรวจเดินทาง สู่อิสระ
                และไปสัมผัสธรรมชาติ ให้{' '}
                <span className="text-primary">
                  &quot;ลมมันปะทะตัว&quot;
                </span>{' '}
                มันคือความสุข
                <br />
                <br />
                <span className="text-primary">
                  สิ่งอำนวยความสะดวกภายในร้าน
                </span>{' '}
                : ร้านสะอาดปลอดภัย มีพื้นที่ชั้นวางสินค้า พื้นที่บริการเซอร์วิส
                ห้องรับรองลูกค้า น้ำดื่มเย็น กาแฟ ชา ของว่าง
                นอกจากนี้ยังมีบริการ FREE WIFI, TV และ พื้นที่สูบบุหรี่
                ไว้บริการลูกค้า
              </p>
            </div>
            <div className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0">
              <Image
                src={KnowsUsImage2}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
          </div>
          <div className="pt-15 md:pb-25 pb-15 flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full sm:w-3/4 md:w-2/4 mx-auto md:mx-0">
              <Image
                src={KnowsUsImage3}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
            <div className="w-full md:w-2/4 text-center md:text-left">
              <h3 className="pb-4 xl:text-2xl text-xl">
                <span className="text-primary font-medium">Environmental</span>
                <span className="text-white"> policy</span>
              </h3>
              <p className="text-white xl:text-xl text-base font-light">
                เรามุ่งมั่นที่จะสร้างสังคมที่เป็นมิตรกับสิ่งแวดล้อม
                ผ่านการดำเนินงานและกิจกรรมของ มาร์แชลโมโตสปอร์ท บนหลักการ 3R
                (Reduce Reuse Recycle) ด้วยการลดการใช้ การนำกลับมาใช้ซ้ำ
                และการนำขยะกลับมาใช้ใหม่ (Recycle)
                สามารถช่วยลดปริมาณขยะให้น้อยลง และปฏิบัติตามข้อกำหนดกฏหมาย
                ด้านการควบคุมสิ่งแวดล้อมทั้งระดับประเทศและระดับสากล
                การปรับปรุงสิ่งแวดล้อมให้เป็นไปตามสุขอนามัยและปลอดภัย
                การรณรงค์และสนับสนุน การปลูกต้นไม้เพิ่มพื้นที่สีเขียว
                และการแยกขยะตามประเภท
                <br />
                <br />
                การคัดเลือกพันธมิตร
                ต้องเป็นผู้ผลิตหรือผู้จำหน่ายที่ใส่ใจต่อสิ่งแวดล้อมได้มาตรฐานอาชีวอนามัย
                และยึดมั่นปฏิบัติตามข้อกำหนดกฏหมาย เราจะพยายามทำงาน
                ผ่านการดำเนินธุรกิจและกิจกรรมต่างๆ
                เพื่อบรรลุผลสำเร็จในการส่งมอบสินค้าและบริการที่เป็นมิตรกับสิ่งแวดล้อม
                สร้างสังคมการขับขี่และมิตรภาพ
              </p>
            </div>
          </div>
          <h1 className="xl:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary text-center">
            Partners
          </h1>
          <div className="xl:pb-30 pb-25 flex flex-wrap justify-center lg:gap-x-16 lg:gap-y-10 gap-x-8 gap-y-6 items-center">
            {partnerImage.map((item, index) => {
              return (
                <div key={index} className="md:w-1/9 sm:w-1/8 w-1/5">
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

export default KnowsUs
