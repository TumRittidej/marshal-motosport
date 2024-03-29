import Container from "@/components/container";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Button, Carousel, Form, Input } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomeBanner1 from "@/assets/img/home/home-banner-1.jpg";
import HomeBanner2 from "@/assets/img/home/home-banner-2.jpg";
import HomeBanner3 from "@/assets/img/home/home-banner-3.jpg";
import HomeBanner4 from "@/assets/img/home/home-banner-4.jpg";

import HomeImage from "@/assets/img/home/home-1.png";

import ProductImage1 from "@/assets/img/home/product-1.png";
import ProductImage2 from "@/assets/img/home/product-2.png";
import ProductImage3 from "@/assets/img/home/product-3.png";

import OurServiceImage1 from "@/assets/img/home/our-service-1.png";
import OurServiceImage2 from "@/assets/img/home/our-service-2.png";
import OurServiceImage3 from "@/assets/img/home/our-service-3.png";
import OurServiceImage4 from "@/assets/img/home/our-service-4.png";
import OurServiceImage5 from "@/assets/img/home/our-service-5.png";
import OurServiceImage6 from "@/assets/img/home/our-service-6.png";
import OurServiceImage7 from "@/assets/img/home/our-service-7.png";
import OurServiceHoverImage1 from "@/assets/img/home/our-service-hover-1.png";
import OurServiceHoverImage2 from "@/assets/img/home/our-service-hover-2.png";
import OurServiceHoverImage3 from "@/assets/img/home/our-service-hover-3.png";
import OurServiceHoverImage4 from "@/assets/img/home/our-service-hover-4.png";
import OurServiceHoverImage5 from "@/assets/img/home/our-service-hover-5.png";
import OurServiceHoverImage6 from "@/assets/img/home/our-service-hover-6.png";
import OurServiceHoverImage7 from "@/assets/img/home/our-service-hover-7.png";

import { translateAndParseHTML } from "@/helpers/i18n";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { MS_ABOUT, MS_PRODUCT } from "@/constants/url";
import { IWorkTogetherRequest } from "@/interface/home";
import { useTranslation } from "next-i18next";
import { I18NextNS } from "@/constants/i18next";

const HOME_NS = I18NextNS.HOME;
const COMMON_NS = I18NextNS.COMMON;

const Home: NextPage = () => {
  const { t } = useTranslation([HOME_NS, COMMON_NS]);
  const productItems = [
    {
      id: 1,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph:
        "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet) AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 2,
      image: ProductImage2,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 3,
      image: ProductImage3,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 4,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 5,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 6,
      image: ProductImage2,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 7,
      image: ProductImage3,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 8,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 9,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 10,
      image: ProductImage2,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 11,
      image: ProductImage3,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
    {
      id: 12,
      image: ProductImage1,
      alternative: "Helmet",
      paragraph: "หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)",
      price: "฿ 40,000",
    },
  ];

  const ourServiceItems = [
    {
      image: OurServiceImage4,
      imageHover: OurServiceHoverImage4,
      title: t("TITLE_SERVICE_4"),
      decsription: t("PARAGRAPH_SERVICE_4"),
    },
    {
      image: OurServiceImage1,
      imageHover: OurServiceHoverImage1,
      title: t("TITLE_SERVICE_1"),
      decsription: t("PARAGRAPH_SERVICE_1"),
    },
    {
      image: OurServiceImage6,
      imageHover: OurServiceHoverImage6,
      title: t("TITLE_SERVICE_6"),
      decsription: t("PARAGRAPH_SERVICE_6"),
    },
    {
      image: OurServiceImage7,
      imageHover: OurServiceHoverImage7,
      title: t("TITLE_SERVICE_7"),
      decsription: t("PARAGRAPH_SERVICE_7"),
    },
    {
      image: OurServiceImage2,
      imageHover: OurServiceHoverImage2,
      title: t("TITLE_SERVICE_2"),
      decsription: t("PARAGRAPH_SERVICE_2"),
    },
    {
      image: OurServiceImage3,
      imageHover: OurServiceHoverImage3,
      title: t("TITLE_SERVICE_3"),
      decsription: t("PARAGRAPH_SERVICE_3"),
    },
    {
      image: OurServiceImage5,
      imageHover: OurServiceHoverImage5,
      title: t("TITLE_SERVICE_5"),
      decsription: t("PARAGRAPH_SERVICE_5"),
    },
  ];

  const [form] = Form.useForm<IWorkTogetherRequest>();
  const [fileName, setFileName] = useState("");

  const handleSubmit = (value: IWorkTogetherRequest) => {
    // console.log(value)
  };
  const handleChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setFileName(files[0].name);
  };
  return (
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="relative">
        <div className="absolute z-1 left-1/2 top-2/4 transform -translate-y-2/4 -translate-x-2/4 text-center lg:w-160 md:w-130 w-80">
          <p className="text-white xl:text-2xl md:text-xl text-lg font-medium">
            WELCOME TO
          </p>
          <h1 className="text-primary xl:text-5xl md:text-4xl text-3xl md:py-4 py-2 font-semibold title--home">
            MARSHAL MOTORSPORT
          </h1>
          <p className="text-white xl:text-2xl md:text-xl text-lg">
            {t("DESCRIPTION")}
          </p>
        </div>
        <Carousel autoplay className="h-[625px]" effect="fade">
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner1}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner2}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner3}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="min-h-[625px]">
            <Image
              src={HomeBanner4}
              alt="Marshal Motosport"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </Carousel>
      </div>
      <div className="bg-1">
        <Container>
          <div className="pt-15 xl:pb-30 md:pb-25 pb-15 md:gap-12 gap-6 flex flex-col md:flex-row md:text-left items-center text-center">
            <h1 className="text-2xl font-semibold text-white block pb-6 md:hidden">
              {translateAndParseHTML(HOME_NS, "HEADING_MARSHAL")}
            </h1>
            <div
              className="sm:w-2/4 w-full mx-auto sm:mx-0"
              data-aos="fade-right"
            >
              <Image
                src={HomeImage}
                alt="Marshal Shop"
                layout="responsive"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/4 sm:w-3/4 w-full mx-auto">
              <h1 className="xl:text-4xl md:text-3xl font-semibold text-white hidden md:block">
                {translateAndParseHTML(HOME_NS, "HEADING_MARSHAL")}
              </h1>
              <p className="pt-4 md:pt-2 xl:text-lg text-base text-white">
                {t("PARAGRAPH_MARSHAL")}
              </p>
              <div className="pt-8">
                <Button
                  href={MS_ABOUT}
                  type="link"
                  className="text-primary hover:text-black !bg-black !hover:bg-primary duration-200 border border-primary min-w-35"
                >
                  {t(`${COMMON_NS}:SEE_MORE_BTN`)}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-2--cover">
        <Container>
          <h1 className="xl:text-4xl md:text-3xl text-2xl font-semibold text-white text-center">
            Marshal
            <span className="text-primary"> shop</span>
          </h1>
          <div className="pt-8 md:pt-15 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:gap-6 lg:gap-x-10">
            {productItems.map((product, index) => {
              return (
                <div key={index} className="group cursor-pointer">
                  <Link href={`${MS_PRODUCT}/${product.id}`}>
                    <a>
                      <div className="relative aspect-w-1 aspect-h-1">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 z-1 transition duration-200" />
                        <Image
                          src={product.image}
                          alt={product.alternative}
                          layout="responsive"
                          loading="lazy"
                          objectFit="cover"
                        />
                      </div>
                      <div className="text-primary text-center">
                        <p className="pt-4 xl:text-lg text-base text-ellipsis overflow-hidden line-clamp-2">
                          {product.paragraph}
                        </p>
                        <span className="block py-2 xl:text-xl text-lg font-bold">
                          {product.price}
                        </span>
                        <Button
                          icon={<i className="icon-cart text-xl" />}
                          className="text-black group-hover:text-primary bg-primary group-hover:bg-transparent duration-200 border border-primary md:w-45 w-34 inline-flex items-center justify-center gap-2"
                        >
                          <div>{t(`${COMMON_NS}:ORDER_BTN`)}</div>
                        </Button>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="pt-15 text-center">
            <Button
              type="link"
              href={MS_PRODUCT}
              className="text-primary hover:text-black bg-transparent hover:bg-primary duration-200 border border-primary min-w-35"
            >
              {t(`${COMMON_NS}:SEE_MORE_BTN`)}
            </Button>
          </div>
          <h1 className="xl:pt-30 md:pt-20 pt-15 xl:text-4xl md:text-3xl text-2xl font-semibold text-white text-center">
            Our
            <span className="text-primary"> Service</span>
          </h1>
          <div className="flex flex-wrap justify-center md:pt-15 pt-10 xl:gap-14 gap-12">
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
              );
            })}
          </div>
        </Container>
      </div>
      <h1
        className="xl:pt-45 md:pt-35 pt-20 md:pb-10 pb-6 xl:text-4xl md:text-3xl text-2xl font-semibold text-white text-center"
        id="section-contact"
      >
        {translateAndParseHTML(HOME_NS, "HEADING_CONTACT")}
      </h1>
      <div className="bg-primary pt-6 md:pt-10 pb-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/4 pt-8 md:pt-0 w-full text-center">
              <h3 className="xl:text-2xl text-xl font-medium pb-4 md:text-left text-center">
                {t("HEADING_ADDRESS_SHOP")}
              </h3>
              <p className="xl:text-lg text-base font-semibold pb-4 md:text-left text-center">
                {t("TRAVEL")}
              </p>
              <iframe
                className="xl:h-[450px] xl:w-[600px] lg:w-[500px] h-[350px] md:w-[450px] w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8715187772455!2d100.4100141!3d13.6655755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bdfb103a855f%3A0xf8058e28f517a747!2zTUFSU0hBTCBNT1RPU1BPUlQgQ08uLExURC7guKrguLLguILguLLguYDguK3guIHguIrguLHguKLguJrguLLguIfguJrguK3guJk!5e0!3m2!1sth!2sth!4v1669437860418!5m2!1sth!2sth"
                loading="lazy"
              ></iframe>
              <ul className="pt-6">
                <li className="flex text-left gap-4 pb-3">
                  <i className="icon-location-mark xl:text-3xl md:text-2xl text-xl" />
                  <p className="xl:text-base text-sm">
                    <b>{t("HEADING_TRAVEL_1")}</b> {t("PARAGRAPH_TRAVEL_1")}
                  </p>
                </li>
                <li className="flex text-left gap-4 pb-3">
                  <i className="icon-location-mark xl:text-3xl md:text-2xl text-xl" />
                  <p className="xl:text-base text-sm">
                    <b>{t("HEADING_TRAVEL_2")}</b> {t("PARAGRAPH_TRAVEL_2")}
                  </p>
                </li>
                <li className="flex text-left gap-4">
                  <i className="icon-location-mark xl:text-3xl md:text-2xl text-xl" />
                  <p className="xl:text-base text-sm">
                    <b>{t("HEADING_TRAVEL_3")}</b> {t("PARAGRAPH_TRAVEL_3")}
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-2/4 sm:w-3/4 w-full mx-auto text-center md:text-left">
              <h3 className="xl:text-2xl text-xl font-medium">
                {t("SUBHEADING_CONTACT")}
              </h3>
              <Form
                layout="vertical"
                className="pt-2 md:pt-6 max-w-150"
                onFinish={handleSubmit}
                form={form}
                autoComplete="off"
              >
                <Form.Item
                  name="position"
                  label={
                    <label className="text-sm">{t("LABEL_POSITION")}</label>
                  }
                >
                  <Input type="text" />
                </Form.Item>
                <Form.Item
                  name="firstName"
                  label={
                    <label className="text-sm">{t("LABEL_FIRSTNAME")}</label>
                  }
                >
                  <Input type="text" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label={
                    <label className="text-sm">{t("LABEL_LASTNAME")}</label>
                  }
                >
                  <Input type="text" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={<label className="text-sm">{t("LABEL_PHONE")}</label>}
                >
                  <Input type="tel" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<label className="text-sm">{t("LABEL_EMAIL")}</label>}
                >
                  <Input type="email" />
                </Form.Item>
                <Form.Item
                  name="experience"
                  label={
                    <label className="text-sm">{t("LABEL_EXPERIENCE")}</label>
                  }
                  className="relative"
                >
                  <Input
                    type="file"
                    accept="image/jpg, application/pdf"
                    className="absolute inset-0 opacity-0 z-1 cursor-pointer"
                    onChange={(e) => handleChangeUpload(e)}
                  />
                  <div className="text-xs text-center text-gray-500 border border-gray-500 border-dashed py-4 bg-white rounded-sm">
                    {fileName ? fileName : t("REMAKE_EXPERIENCE")}
                  </div>
                </Form.Item>
                <Form.Item
                  name="confirm"
                  label={<label className="text-sm">9 + 5 =</label>}
                >
                  <Input type="text" />
                  <p className="md:text-xs text-[10px] font-light text-right pt-1">
                    (กรุณากรอกตัวเลขผลลัพธ์จากด้านบน)
                  </p>
                </Form.Item>
                <div className="text-right">
                  <Button
                    onClick={() => handleSubmit}
                    type="primary"
                    htmlType="submit"
                    className="px-15 bg-black hover:bg-primary text-primary hover:text-black border border-black"
                  >
                    {t(`${COMMON_NS}:SEND_BTN`)}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [HOME_NS, COMMON_NS])),
    },
  };
};
export default Home;
