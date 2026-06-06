import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    q: "What is temetro?",
    a: "temetro is an open-source AI chat that lets clinicians retrieve patient information in plain language. It connects to your records and answers questions with cited sources.",
  },
  {
    q: "Is temetro HIPAA compliant?",
    a: "temetro is built to support HIPAA compliance with role-based access, audit logging, and encryption. Because you self-host it, compliance ultimately depends on your deployment — but the building blocks are there.",
  },
  {
    q: "Where is patient data stored?",
    a: "Wherever you choose. temetro is designed to run inside your own infrastructure, so protected health information never has to leave your network.",
  },
  {
    q: "Can I self-host temetro?",
    a: "Yes. Self-hosting is a first-class deployment option. You can run temetro on-prem or in a private cloud you control.",
  },
  {
    q: "Which AI models does it use?",
    a: "temetro is model-agnostic. You can connect hosted models or run open models locally, depending on your privacy and performance needs.",
  },
  {
    q: "Is temetro really open source?",
    a: "Yes. The full source is open so you can audit it, extend it, and contribute back.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="text-center">
        <Badge variant="outline">FAQ</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>
      <Accordion className="mt-10">
        {faqs.map((item, index) => (
          <AccordionItem key={item.q} value={`item-${index}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
