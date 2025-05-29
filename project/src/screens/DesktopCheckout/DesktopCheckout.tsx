import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { OrderSummarySection } from "./sections/OrderSummarySection";
import { ShippingAddressSection } from "./sections/ShippingAddressSection/ShippingAddressSection";

export const DesktopCheckout = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col items-center justify-start w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] px-14 py-12 relative">
        <div className="mb-6">
          <Button variant="ghost" size="icon" className="rounded-full p-2">
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <ShippingAddressSection />
          <OrderSummarySection />
        </div>
      </div>
    </main>
  );
};
