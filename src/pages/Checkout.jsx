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
    <div className="w-fit mx-auto">
      <Card color="transparent" shadow={false}>
        <Typography title="Checkout" variant="h4" className={"text-titleColor"}>
          Checkout
        </Typography>
        <form className="mt-4 w-80 max-w-screen-lg sm:w-50">
          <Typography variant="h6" color="blue-gray" className="">
            Name
          </Typography>
          <Input
            type="Name"
            label="Name"
            placeholder="JohnDoe"
            value={"John Doe"}
          />
          <div className="flex flex-col gap-6">
            <div className="flex sm:flex-col">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Email
                </Typography>
                <Input
                  type="Email"
                  label="Email"
                  placeholder="JohnDoe@gmail.com"
                  value={"johndoe333@gmail.com"}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Phone Number
                </Typography>
                <Input
                  type="Phone Number"
                  label="Phone Number"
                  placeholder="09398383223"
                  value={"09888777666"}
                />
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-2">
              Address
            </Typography>
            <Input
              type="Email"
              label="Address"
              placeholder="..."
              value={"Yangon"}
            />
          </div>

          <div className="my-3">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Payment Method
            </Typography>
            <Select
              value="KBZ Banking"
              placeholder="Select Payment Method"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
          <Checkbox
            checked
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={showModal}>
            Confirm
          </Button>
        </form>
      </Card>
    </div>
  );
}
