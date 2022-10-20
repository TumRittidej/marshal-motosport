import Image from 'next/image'
import { FC } from 'react'
import Container from '@/components/container'
import ContactImage1 from '@/assets/img/contact/contact-1.png'
import ContactImage2 from '@/assets/img/contact/contact-2.png'
import ContactImage3 from '@/assets/img/contact/contact-3.png'
import Partner1 from '@/assets/img/contact/partner-1.png'
import Partner2 from '@/assets/img/contact/partner-2.png'
import Partner3 from '@/assets/img/contact/partner-3.png'
import Partner4 from '@/assets/img/contact/partner-4.png'
import Partner5 from '@/assets/img/contact/partner-5.png'
import Partner6 from '@/assets/img/contact/partner-6.png'
import Partner7 from '@/assets/img/contact/partner-7.png'
import Partner8 from '@/assets/img/contact/partner-8.png'
import Partner9 from '@/assets/img/contact/partner-9.png'
import Partner10 from '@/assets/img/contact/partner-10.png'
import Partner11 from '@/assets/img/contact/partner-11.png'
import Partner12 from '@/assets/img/contact/partner-12.png'
import Partner13 from '@/assets/img/contact/partner-13.png'
import Partner14 from '@/assets/img/contact/partner-14.png'
import Partner15 from '@/assets/img/contact/partner-15.png'
import Partner16 from '@/assets/img/contact/partner-16.png'
import Partner17 from '@/assets/img/contact/partner-17.png'
import Partner18 from '@/assets/img/contact/partner-18.png'

const Contact: FC = () => {
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
    <section className="bg-black pt-44">
      <h1 className="pt-20 pb-10 text-4xl font-semibold text-primary text-center">
        รู้จักเรา
      </h1>
      <div className="bg-1">
        <Container>
          <div className="flex gap-12">
            <div className="w-2/4">
              <Image
                src={ContactImage1}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
            <div className="w-2/4">
              <h3 className="pb-4 text-[26px]">
                <span className="text-primary font-medium">
                  Marshal Motosport
                </span>
                <span className="text-white"> shop</span>
              </h3>
              <p className="text-white text-xl">
                <span className="text-primary">Marshal Motosport Shop</span>{' '}
                เป็นร้านค้าจำหน่ายสินค้าอะไหล่แต่งจักรยานยนต์
                ที่ครอบคลุมอุปกรณ์ต่างๆบนรถ อุปกรณ์เอนกประสงค์ กล่องบรรทุก
                รวมทั้งเครื่องแต่งกายสำหรับขับขี่เพื่อความปลอดภัย อาทิ
                หมวกกันน็อค เสื้อการ์ด ถุงมือ ฯลฯ
                เพื่อรองรับการขับขี่ในชีวิตประจำวัน กิจกรรมการเดินทางออกทริป
                เพิ่มความสะดวกสบาย (อุปกรณ์สัมภาระ) การแต่งสวยงาม (จัดสภาพ)
                และเพิ่มประสิทธิภาพ (ระบบเบรก)
              </p>
              <p className="text-white text-xl">
                นอกจากนี้ เรามีความชำนาญในการแก้ไขปรับปรุง
                ระบบช่วงล่างลดการสั่นสะเทือน
                ด้วยมาตรฐานที่ดีลเลอร์ได้รับการอบรมจากแบรนด์โช๊คอัพชั้นนำ เช่น
                HYPERPRO OHLIN YSS PROFENDER
              </p>
              <p className="text-white text-xl">
                รวมไปถึงการให้บริการเซอร์วิสได้มาตรฐาน
                ทั้งการถอดประกอบที่ต้องใช้อุปกรณ์คุณภาพสูง มีความละเอียด
                และใส่ใจระมัดระวังกับรถของลูกค้าอย่างกับเป็นรถของเราเอง
                รวมถึงการมีบริการหลังการขายให้ครบวงจร
              </p>
              <p className="text-white text-xl">
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
          <div className="pt-15 flex gap-12">
            <div className="w-2/4">
              <p className="text-white text-xl">
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
              </p>
              <p className="text-white text-xl">
                มาร์แชล หมายถึง ผู้นำ หรือแม่ทัพ ซึ่งทางคุณชัย ให้นิยามว่า
                ผู้ขับขี่ เมื่อขับขี่รถของตน
                ก็เหมือนผู้นำที่ต้องการไปสำรวจเดินทาง สู่อิสระ
                และไปสัมผัสธรรมชาติ ให้{' '}
                <span className="text-primary">&quot;ลมมันปะทะตัว&quot;</span>{' '}
                มันคือความสุข
              </p>
              <p className="text-white text-xl">
                <span className="text-primary">
                  สิ่งอำนวยความสะดวกภายในร้าน
                </span>{' '}
                : ร้านสะอาดปลอดภัย มีพื้นที่ชั้นวางสินค้า พื้นที่บริการเซอร์วิส
                ห้องรับรองลูกค้า น้ำดื่มเย็น กาแฟ ชา ของว่าง
                นอกจากนี้ยังมีบริการ FREE WIFI, TV และ พื้นที่สูบบุหรี่
                ไว้บริการลูกค้า
              </p>
            </div>
            <div className="w-2/4">
              <Image
                src={ContactImage2}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
          </div>
          <div className="pt-15 pb-25 flex gap-12">
            <div className="w-2/4">
              <Image
                src={ContactImage3}
                layout="responsive"
                alt="Marshal Motosport Contact"
              />
            </div>
            <div className="w-2/4">
              <h3 className="pb-4 text-[26px]">
                <span className="text-primary font-medium">Environmental</span>
                <span className="text-white"> policy</span>
              </h3>
              <p className="text-white text-xl">
                เรามุ่งมั่นที่จะสร้างสังคมที่เป็นมิตรกับสิ่งแวดล้อม
                ผ่านการดำเนินงานและกิจกรรมของ มาร์แชลโมโตสปอร์ท บนหลักการ 3R
                (Reduce Reuse Recycle) ด้วยการลดการใช้ การนำกลับมาใช้ซ้ำ
                และการนำขยะกลับมาใช้ใหม่ (Recycle)
                สามารถช่วยลดปริมาณขยะให้น้อยลง และปฏิบัติตามข้อกำหนดกฏหมาย
                ด้านการควบคุมสิ่งแวดล้อมทั้งระดับประเทศและระดับสากล
                การปรับปรุงสิ่งแวดล้อมให้เป็นไปตามสุขอนามัยและปลอดภัย
                การรณรงค์และสนับสนุน การปลูกต้นไม้เพิ่มพื้นที่สีเขียว
                และการแยกขยะตามประเภท การคัดเลือกพันธมิตร
                ต้องเป็นผู้ผลิตหรือผู้จำหน่ายที่ใส่ใจต่อสิ่งแวดล้อมได้มาตรฐานอาชีวอนามัย
                และยึดมั่นปฏิบัติตามข้อกำหนดกฏหมาย เราจะพยายามทำงาน
                ผ่านการดำเนินธุรกิจและกิจกรรมต่างๆ
                เพื่อบรรลุผลสำเร็จในการส่งมอบสินค้าและบริการที่เป็นมิตรกับสิ่งแวดล้อม
                สร้างสังคมการขับขี่และมิตรภาพ
              </p>
            </div>
          </div>
          <h1 className="pb-10 text-4xl font-semibold text-primary text-center">
            Partners
          </h1>
          <div className="pb-30 grid grid-cols-6 gap-x-16 gap-y-10 items-center">
            {partnerImage.map((item, index) => {
              return (
                <div key={index}>
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

export default Contact
