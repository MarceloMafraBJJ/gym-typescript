import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis blanditiis minima ipsa consectetur dolores",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis blanditiis minima ipsa consectetur dolores",
    },
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis blanditiis minima ipsa consectetur dolores",
    },
  ];

  const motionContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}

        <motion.div
          className="uppercase md:mt-28 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <p className="md:pt-10">More than just gym.</p>
          </HText>
          <p className="my-5 text-sm normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim,
            recusandae vitae possimus ipsam non delectus quas maxime aut
            praesentium, ipsa nam.
          </p>
        </motion.div>

        {/* Benefits */}

        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={motionContainer}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and Description */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}

          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="Benefits-page-graphic"
          />
          {/* Description */}

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  className="uppercase"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of happy members getting{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                est doloremque alias odit nemo voluptatibus nesciunt dolor nobis
                possimus, mollitia fugit, quas iure ratione! Ea impedit iusto
                dolorem quasi enim?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                est doloremque alias odit nemo voluptatibus nesciunt dolor nobis
                possimus, mollitia fugit, quas iure ratione! Ea impedit iusto
                dolorem quasi enim?
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
