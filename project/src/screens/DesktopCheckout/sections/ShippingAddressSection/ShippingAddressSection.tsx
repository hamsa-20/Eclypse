import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ShippingAddressSection = (): JSX.Element => {
  const navItems = [
    { name: "About Us", isActive: false },
    { name: "Waitlist", isActive: false },
    { name: "Cart", isActive: true },
  ];

  return (
    <header className="w-full h-[87px] bg-[#ffffff96] backdrop-blur-[18.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.5px)_brightness(100%)]">
      <nav className="flex items-center justify-between h-full max-w-[1323px] mx-auto px-[60px]">
        <div className="w-[49px] h-[45px] rounded-[5px] [background:url(..//frame-8.png)_50%_50%_/_cover]" />

        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[19.3px] tracking-[-0.39px] leading-normal whitespace-nowrap ${
                  !item.isActive ? "opacity-[0.36]" : ""
                }`}
              >
                {item.name}
              </div>
              {item.isActive && (
                <Separator className="w-[50px] h-0.5 absolute -bottom-3 left-0" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
