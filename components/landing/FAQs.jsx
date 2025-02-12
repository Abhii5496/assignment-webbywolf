import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FadeIn } from "../ui/Animations";

export function FAQs() {
  return (
    <div className="p-5 lg:p-20">
      <FadeIn as="h2" className="font-bold lg:text-3xl uppercase pb-10">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </FadeIn>
      <FadeIn as="div" delay={0.4}>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-md font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </AccordionTrigger>
              <AccordionContent className="w-full lg:w-2/3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                ipsam tempore inventore nemo provident quo atque recusandae
                doloribus aperiam explicabo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, impedit nihil magnam a
                dolores quia.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  );
}
