import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Separator } from "../../../../components/ui/separator";

export const OrderSummarySection = (): JSX.Element => {
  // Order summary data
  const orderItems = [
    { name: "Items - Silhouette No. 1 – Vermilion", price: "7,999" },
    { name: "Shipping and handling:", price: "200" },
    { name: "Before tax:", price: "6,599" },
    { name: "Tax Collected:", price: "1,400" },
  ];

  return (
    <section className="w-full flex flex-col mt-1">
      <h2 className="text-2xl font-normal ml-[73px]">Shipping Address</h2>

      <div className="flex mt-16 gap-6">
        {/* Shipping Address Form */}
        <Card className="w-[731px] border-[3px] border-[#c2c2c2] rounded-[9px]">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <RadioGroup
                defaultValue="new-address"
                className="flex items-center"
              >
                <div className="flex items-center">
                  <RadioGroupItem
                    value="new-address"
                    id="new-address"
                    className="w-10 h-10 border-[#f63030] data-[state=checked]:bg-[#f63030] data-[state=checked]:border-[#f63030]"
                  />
                  <Label
                    htmlFor="new-address"
                    className="ml-4 text-[25px] font-normal"
                  >
                    Add New Address
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-lg">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-lg">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="streetAddress" className="text-lg">
                Street Address
              </Label>
              <Input
                id="streetAddress"
                className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="aptNumber" className="text-lg">
                  Apt Number
                </Label>
                <Input
                  id="aptNumber"
                  className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="text-lg">
                  State
                </Label>
                <Input
                  id="state"
                  className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip" className="text-lg">
                  Zip
                </Label>
                <Input
                  id="zip"
                  className="h-[67px] rounded-lg border-2 border-[#c7c7c7]"
                />
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <Button
                variant="outline"
                className="w-[203px] h-[67px] text-xl border-2 border-[#c2c2c2] rounded-lg"
              >
                cancel
              </Button>

              <Button className="flex-1 h-[67px] bg-black text-white rounded-[8.71px] text-[19.3px] font-medium tracking-[-0.39px]">
                Save This Address
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="w-[572px] bg-[#f0f0f0] rounded-[9px] shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-10">
            <div className="text-lg">
              <span className="text-[#575757]">
                By placing your order, you agree to our company{" "}
              </span>
              <span className="text-black">Privacy policy</span>
              <span className="text-[#575757]"> and </span>
              <span className="text-black">Conditions of use.</span>
            </div>

            <Separator className="my-8" />

            <h3 className="text-[25px] font-normal mb-8">Order Summary</h3>

            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-lg text-[#575757]"
                >
                  <span>{item.name}</span>
                  <span className="text-right">{item.price}</span>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex justify-between text-[25px] font-normal mb-8">
              <span>Order Total:</span>
              <span className="text-right">8,199</span>
            </div>

            <Button className="w-full h-[67px] bg-black text-white rounded-[8.71px] text-[19.3px] font-medium tracking-[-0.39px] mt-8">
              Place Order
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
