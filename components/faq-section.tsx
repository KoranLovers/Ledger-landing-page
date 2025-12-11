import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Ledger really free?",
    answer:
      "Yes, 100% free. There's no premium version, no trial period, no hidden costs. It's free because it's built as a personal project to help people manage their finances simply.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "All your data is stored locally in your browser using Chrome's storage API. Nothing is ever sent to external servers. Your financial data never leaves your device.",
  },
  {
    question: "Can I sync across devices?",
    answer:
      "Currently, Ledger stores data per-browser. You can export your data as JSON or CSV and import it on another device. Cloud sync may be considered in future updates.",
  },
  {
    question: "Is this a crypto wallet?",
    answer:
      "No. Ledger is a personal expense tracker for everyday spending — groceries, bills, subscriptions, etc. It has no connection to cryptocurrency or blockchain.",
  },
  {
    question: "What browsers are supported?",
    answer: "Ledger works on Chrome and Chromium-based browsers including Microsoft Edge, Brave, Arc, and Opera.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. You can export all your data anytime as CSV (for spreadsheets) or JSON (for backups). Your data belongs to you.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-6 bg-secondary/50 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-16">Questions & Answers</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
