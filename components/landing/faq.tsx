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
    a: "temetro is an open-source workspace for clinics: patient records, scheduling, prescriptions, notes, and tasks in one place, with role-based access for your care team, plus a built-in AI chat to find what you need by asking.",
  },
  {
    q: "Does temetro help with HIPAA?",
    a: "temetro gives you building blocks that support compliance, like role-based access and self-hosting that keeps PHI on your own network. Because you deploy it, meeting HIPAA (or any regime) ultimately depends on your environment and controls.",
  },
  {
    q: "Where is patient data stored?",
    a: "Wherever you choose. temetro is designed to run inside your own infrastructure, so protected health information never has to leave your network.",
  },
  {
    q: "Can I self-host temetro?",
    a: "Yes. Self-hosting is a first-class deployment option, with Docker and Postgres, so you can run temetro on-prem or in a private cloud you control.",
  },
  {
    q: "Does it use AI?",
    a: "Yes. temetro has a built-in AI chat for working with the record. It's model-agnostic, so you can connect a hosted model or run an open model locally depending on your privacy needs.",
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
        <Badge variant="info">FAQ</Badge>
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
