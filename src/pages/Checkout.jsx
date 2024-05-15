import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useModalStatusStore } from "../store/modalStatus";
import AfterPayment from "../components/messageModal/AfterPayment";
import { useCartStore } from "../store/cart-store";

const paymentMethods = [
  "PayPal",
  "KPay",
  "AYA Pay",
  "Wave Pay",
  "KBZ Banking",
  "AYA Banking",
  "UAB Banking",
];

export function Checkout() {
  const modalStatusStore = useModalStatusStore();
  const cartStore = useCartStore();
  const showModal = () => {
    cartStore.setDefault();
    modalStatusStore.setModal({
      isOpen: true,
      title: "Thanks for purchasing",
      Modal: AfterPayment,
    });
  };
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <Card color="transparent" shadow={false} className="w-full">
        <Typography title="Checkout" variant="h4" className="text-titleColor text-center mb-6">
          Checkout
        </Typography>
        <form className="mt-4">
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Name
            </Typography>
            <Input
              type="text"
              label="Name"
              placeholder="John Doe"
              value="John Doe"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Email
                </Typography>
                <Input
                  type="email"
                  label="Email"
                  placeholder="JohnDoe@gmail.com"
                  value="johndoe333@gmail.com"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Phone Number
                </Typography>
                <Input
                  type="tel"
                  label="Phone Number"
                  placeholder="09398383223"
                  value="09888777666"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Address
            </Typography>
            <Input
              type="text"
              label="Address"
              placeholder="..."
              value="Yangon"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Payment Method
            </Typography>
            <Select
              value="KBZ Banking"
              placeholder="Select Payment Method"
              className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              menuProps={{ className: "h-48" }}
            >
              {paymentMethods.map((name) => (
                <Option key={name} value={name}>
                  <div className="flex items-center gap-x-2">{name}</div>
                </Option>
              ))}
            </Select>
          </div>
          <div className="mb-4">
            <Checkbox
              checked
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900 ml-1"
                  >
                    Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </div>
          <Button className="mt-6 w-full" onClick={showModal}>
            Confirm
          </Button>
        </form>
      </Card>
    </div>

  );
}
