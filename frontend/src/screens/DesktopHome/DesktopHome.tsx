import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const DesktopHome = (): JSX.Element => {
  // Size options data
  const sizeOptions = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  // Navigation links data
  const navLinks = [
    { id: 1, text: "About Us" },
    { id: 2, text: "Waitlist" },
    { id: 3, text: "Cart" },
  ];

  // Footer links data
  const footerLinks = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Buy" },
    { id: 4, text: "Our Customers" },
    { id: 5, text: "Contacts" },
  ];

  // Product images data
  const productImages = [
    { id: 1, src: "/frame-12.png", alt: "Product front view" },
    { id: 2, src: "/frame-11.png", alt: "Product side view" },
    { id: 3, src: "/frame-13.png", alt: "Product back view" },
  ];

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
        {/* Fixed Navigation Bar */}
        <header className="fixed w-[1440px] h-20 top-0 left-0 bg-[#00000096] backdrop-blur-[18.5px] backdrop-brightness-[100%] z-50">
          <nav className="relative w-[1175px] h-[45px] top-[13px] left-[60px] flex items-center justify-between">
            <div className="w-[49px] h-[45px] rounded-[5px] bg-[url(/frame-8.png)] bg-cover"></div>

            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px]"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <Button className="ml-4 bg-white text-black rounded-[8.71px] px-[38.69px] py-[14.51px]">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[19.3px] tracking-[-0.39px]">
                Buy
              </span>
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative w-[1371px] h-[771px] mt-[182px] mx-auto">
          <div className="absolute w-[385px] h-[129px] top-[15px] left-[21px] z-10">
            <h1 className="absolute top-0 left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[107.1px] tracking-[-1.07px]">
              Eclypse
            </h1>
            <div className="absolute w-[27px] h-[26px] top-7 left-[356px] bg-[url(/group.png)] bg-[100%_100%]" />
          </div>

          <div className="absolute w-[1339px] h-[530px] top-[209px] left-[21px] rounded-[5px] overflow-hidden z-10">
            <div className="absolute top-[468px] left-[835px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[34.6px] tracking-[-0.69px]">
              A silhouette worth remembering
            </div>
          </div>

          <img
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Eclypse fashion model"
            src="/3753692-uhd-3840-2160-25fps-1.png"
          />

          <div className="absolute w-[53px] h-[18px] top-[127px] left-[1316px] flex items-center">
            <div className="absolute w-[11px] h-[11px] top-1 left-0 bg-[url(/group-1.png)] bg-[100%_100%]" />
            <div className="absolute left-[19px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px]">
              2025
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-[50px] mt-[113px]">
          <p className="w-[800px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-normal">
            Rooted in a philosophy of quiet luxury, our garments are designed to
            speak softly in cut, in movement, in presence.
          </p>

          <div className="w-[312px] h-[41px] mt-[113px] relative">
            <a href="#" className="flex items-center">
              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px]">
                Learn more about Eclypse
              </span>
              <img
                className="w-[39px] h-[39px] ml-2"
                alt="Arrow right"
                src="/arrow-right.svg"
              />
            </a>
            <img className="w-[301px] h-px mt-2" alt="Line" src="/line-1.svg" />
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="flex flex-wrap px-[50px] mt-[77px] gap-[31px]">
          <div className="w-[883px] h-[489px] rounded-[5px] bg-[url(..//frame-3.png)] bg-cover" />
          <div className="w-[424px] h-[489px] rounded-[5px] bg-[url(..//frame-18-2.png)] bg-cover" />

          <div className="w-[424px] h-[397px] rounded-[5px] bg-[url(..//frame-18.png)] bg-cover" />
          <div className="w-[424px] h-[397px] rounded-[5px] bg-[url(..//frame-18-1.png)] bg-cover" />
          <div className="w-[424px] h-[397px] rounded-[5px] bg-[url(..//frame-8.png)] bg-cover" />
        </section>

        {/* Product Title Section */}
        <section className="px-[43px] mt-[183px]">
          <h2 className="w-[800px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px]">
            Silhouette No. 1 – Vermilion
          </h2>
        </section>

        {/* Product Display Section */}
        <section className="w-full h-[912px] mt-[60px] bg-[#f6f6f6] flex">
          <div className="w-[704px] h-full">
            <img
              className="w-full h-full object-cover"
              alt="Product display"
              src="/rectangle-2.png"
            />
          </div>

          <div className="flex-1 px-[32px] py-[53px]">
            <p className="w-[539px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-normal">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </p>

            <div className="flex gap-[32px] mt-[68px]">
              {productImages.map((image) => (
                <Card
                  key={image.id}
                  className="w-[200px] h-[199px] border-none rounded-none p-0"
                >
                  <CardContent className="p-0">
                    <div
                      className="w-full h-full bg-cover"
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="mt-[49px] bg-black/20" />

            <div className="mt-[54px]">
              <div className="flex items-center">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px]">
                  ₹ 7,999
                </span>
                <span className="ml-[32px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px]">
                  MRP incl. of all taxes
                </span>
              </div>

              <div className="mt-[18px] flex items-center">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px]">
                  Please select a size
                </span>
                <a
                  href="#"
                  className="ml-[36px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline"
                >
                  Size chart
                </a>
              </div>

              <div className="flex gap-[32px] mt-[18px]">
                {sizeOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="w-[82px] h-[49px] bg-[#d9d9d9] rounded text-[#767676] border-none hover:bg-[#d9d9d9]/80"
                  >
                    <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]">
                      {option.size}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="mt-[53px] bg-black/20" />

            <div className="flex gap-8 mt-[34px]">
              <Button
                variant="outline"
                className="flex-1 h-[66px] rounded-[8.71px] border-2 border-[#c2c2c2]"
              >
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
                  Add to Cart
                </span>
              </Button>

              <Button className="flex-1 h-[66px] bg-black rounded-[8.71px]">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]">
                  Buy
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="px-[50px] mt-[179px]">
          <Accordion type="single" collapsible className="w-[1342px]">
            <AccordionItem value="size-fit" className="border-b-0">
              <AccordionTrigger className="py-6">
                <h3 className="w-[800px] text-left [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                  Size &amp; Fit
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-white py-4">
                  Size and fit information goes here
                </div>
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-white/10" />

            <AccordionItem value="delivery-returns" className="border-b-0">
              <AccordionTrigger className="py-6">
                <h3 className="w-[800px] text-left [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                  Delivery &amp; Returns
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-white py-4">
                  Delivery and returns information goes here
                </div>
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-white/10" />

            <AccordionItem value="how-made" className="border-b-0">
              <AccordionTrigger className="py-6">
                <h3 className="w-[800px] text-left [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                  How This Was Made
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-white py-4">
                  Manufacturing information goes here
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="mt-[40px] mx-[50px] bg-white/10" />

        {/* Testimonial Section */}
        <section className="px-[50px] mt-[154px]">
          <div className="relative w-[1341px] h-[412px]">
            <span className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px]">
              OUR CUSTOMERS
            </span>

            <div className="absolute top-[92px] left-4 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px]">
              &quot;
            </div>

            <p className="absolute w-[750px] top-28 left-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl tracking-0 leading-[52.3px]">
              Understated, but unforgettable. It feels like it was made for me
            </p>

            <div className="absolute top-[304px] left-[82px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl tracking-0 leading-9">
              Random Woman
            </div>

            <div className="absolute top-[352px] left-[84px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-0 leading-6">
              NY, USA
            </div>

            <img
              className="absolute w-4 h-7 top-[146px] left-[1138px]"
              alt="Vector"
              src="/vector-2.svg"
            />

            <img
              className="absolute w-[126px] h-[126px] top-[97px] left-[1205px]"
              alt="Customer photo 1"
              src="/ellipse-3.png"
            />

            <img
              className="absolute w-[69px] h-[69px] top-[253px] left-[1233px]"
              alt="Customer photo 2"
              src="/ellipse-4.png"
            />

            <img
              className="absolute w-[69px] h-[69px] top-[343px] left-[1233px]"
              alt="Customer photo 3"
              src="/ellipse-5.png"
            />
          </div>
        </section>

        <Separator className="mt-[100px] mx-[50px] bg-white/10" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 mt-[40px] mx-[50px] bg-[#090808]">
          <div className="inline-flex flex-col items-start gap-[67px]">
            <div className="flex items-start gap-2">
              <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8">
                Eclypse
              </div>
              <img
                className="w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
                alt="Vector"
                src="/vector-3.svg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <React.Fragment key={link.id}>
                    <a
                      href="#"
                      className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-0 leading-[19.6px]"
                    >
                      {link.text}
                    </a>
                    {index < 2 && (
                      <span className="opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] font-normal tracking-0">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] font-normal tracking-0">
                  /
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-0 leading-[19.6px]"
                >
                  Our Customers
                </a>
                <span className="opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] font-normal tracking-0">
                  /
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-0 leading-[19.6px]"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-end gap-8 flex-1 self-stretch">
            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] text-[10px] tracking-[1.50px] leading-[13px] font-medium text-[#d3d5d8]">
                CONTACT
              </div>
              <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px]">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px]">
                EMAIL
              </div>
              <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-0 leading-[19.6px]">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex flex-col items-end justify-between flex-1 self-stretch">
            <div className="relative w-10 h-10 bg-white rounded-[20px]">
              <img
                className="absolute w-[13px] h-[15px] top-3 left-[13px]"
                alt="Vector"
                src="/vector.svg"
              />
            </div>

            <div className="opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-0 leading-[13px]">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-0 leading-[13px]">
                ©
              </span>
              <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
