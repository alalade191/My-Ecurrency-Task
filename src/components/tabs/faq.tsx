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
            <AccordionTrigger className="font-normal text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-normal text-base ">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    // <div className="">
    //   <div className="mx-auto space-y-4 md:space-y-6">
    //     {questionsAndAnswers.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className={`border-t-[0.83px] transition-all duration-300 ease-in-out p-[10.65px] md:p-[20px] ${
    //           activeTab === index
    //             ? " border-t-[#BDBDBD]"
    //             : " border-t-[#BDBDBD] "
    //         }`}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5, delay: index * 0.1 }}
    //       >
    //         <button
    //           className="flex items-center justify-between w-full"
    //           onClick={() => toggleTab(index)}
    //         >
    //           <span
    //             className={`text-[14px] leading-[20px] md:text-[20px]  md:leading-[34.1px] text-start w-full mr-8 ${
    //               activeTab === index
    //                 ? "text-white font-[700]"
    //                 : "text-[#242424] font-[500]"
    //             }`}
    //           >
    //             {item.question}
    //           </span>
    //         </button>
    //         {activeTab === index && (
    //           <div className=" mt-2 md:mt-4 mr-8">
    //             <p className="text-blue-400 font-[400] md:leading-[28px] leading-[18px] text-[12px] md:text-[16px]">
    //               {item.answer}
    //             </p>
    //           </div>
    //         )}
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
};
