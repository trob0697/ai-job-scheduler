import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import * as Models from "../_helpers/models";

const FAQs: Models.FAQ[] = [
  {
    question: "List question one here?",
    answer: "Very verbose and in-depth answer pertaining to the question",
  },
  {
    question: "List question two here?",
    answer: "Very verbose and in-depth answer pertaining to the question",
  },
  {
    question: "List question three here?",
    answer: "Very verbose and in-depth answer pertaining to the question",
  },
  {
    question: "List question four here?",
    answer: "Very verbose and in-depth answer pertaining to the question",
  },
  {
    question: "List question five here?",
    answer: "Very verbose and in-depth answer pertaining to the question",
  },
];

export default function FAQ() {
  return (
    <>
      <div id="faq" className="nav-section min-h-0 items-start">
        <div>
          <h4 className="text-[hsl(var(--primary))]">FAQ</h4>
          <h5>Frequently Asked Questions</h5>
        </div>
        <Accordion type="single" collapsible>
          {FAQs &&
            FAQs.map((item, i) => {
              return (
                <AccordionItem key={`faq-${i}`} value={`faq-${i}`}>
                  <AccordionTrigger className="accordion-header">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
      <div className="p-12" />
    </>
  );
}
