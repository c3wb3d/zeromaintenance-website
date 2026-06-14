import { QuoteForm } from "@/components/QuoteForm";
import { Container, SectionHead } from "@/components/ui";

export default function QuotePage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-[720px]">
        <SectionHead
          label="Free quote"
          title="Tell us what needs done"
          description="Describe the job and your area. We'll reply fast — usually within the hour — with an upfront price."
        />
        <QuoteForm />
      </Container>
    </section>
  );
}
