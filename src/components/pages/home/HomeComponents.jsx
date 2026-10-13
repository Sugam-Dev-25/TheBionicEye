import HeroBanner from "./components/HeroBanner";
import Applications from "./components/Applications";
import TheSystem from "./components/Thesystem";
import WhatWeSupply from "./components/Whatwesupply";
import RegulatoryPosition from "./components/Regulatoryposition";
import ProvenInTheField from "./components/Proveninthefield";
import ContactForm from "./components/Contactform";

import { motion } from "motion/react";

const sections = [
  { id: "hero", Component: HeroBanner },
  { id: "system", Component: TheSystem },
  { id: "applications", Component: Applications },
  { id: "supply", Component: WhatWeSupply },
  { id: "regulatory", Component: RegulatoryPosition },
  { id: "proven", Component: ProvenInTheField },
  { id: "contact", Component: ContactForm },
];

const HomeComponents = () => {
  return (
    <main>
      {sections.map(({ id, Component }, index) => (
        <motion.div
          key={id}
          initial={{
            opacity: 0,
            y: index === 0 ? 0 : 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Component />
        </motion.div>
      ))}
    </main>
  );
};

export default HomeComponents;