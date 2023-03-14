import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            facere neque excepturi, accusamus doloremque voluptas expedita
          </p>
          <p>© Evogym All Rights Reserved. </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>

          <p className="my-5">Link example 1</p>
          <p className="my-5">Link example 2</p>
          <p className="my-5">Link example 3</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>

          <p className="my-5">Social example 1</p>
          <p className="my-5">Social example 2</p>
          <p className="my-5">Social example 3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
