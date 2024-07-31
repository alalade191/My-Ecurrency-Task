"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QnA {
  question: string;
  answer: string;
}

export const FaqAccordian = () => {
  const questionsAndAnswers: QnA[] = [
    {
      question: "Q1: How does it work?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q2: Why inhale melatonin?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q3: How much melatonin is there per inhale?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q4: Is it an e-cigarette or tobacco product?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q5: What's in it?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q6: What's not in it?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q7: How long does it last?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Q8: How do I know it has run out/died?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
  ];

  return (
    <div>
      <Accordion className=" " type="single" collapsible>
        {questionsAndAnswers.map((item, idx) => (
          <AccordionItem key={idx} value={String(idx)}>
            <AccordionTrigger className="font-normal text-base text-nowrap">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-normal text-base ">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
