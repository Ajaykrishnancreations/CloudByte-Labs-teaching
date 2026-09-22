import { useState } from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const snippets: Record<string, string> = {
  LWC: `import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactList extends LightningElement {
  @wire(getContacts) contacts;
}`,
  React: `function CourseCard({ course }) {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <button onClick={() => setEnrolled(true)}>
      {enrolled ? 'Enrolled' : 'Enroll Now'}
    </button>
  );
}`,
  Apex: `public with sharing class CaseService {
  public static void escalate(List<Case> cases) {
    for (Case c : cases) {
      c.Priority = 'High';
    }
    update cases;
  }
}`,
  Node: `app.post('/api/leads', async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
});`,
  Python: `def automate_report(data: list[dict]) -> dict:
    total = sum(row["amount"] for row in data)
    return {"total": total, "count": len(data)}`,
}

export default function CodeShowcase() {
  const tabs = Object.keys(snippets)
  const [active, setActive] = useState(tabs[0])

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Real Code" title="A Look Inside the Classroom" />
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60">
          <div className="flex gap-1 overflow-x-auto border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  active === tab ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <pre className="overflow-x-auto p-5 text-left text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
            <code>{snippets[active]}</code>
          </pre>
        </div>
      </Container>
    </section>
  )
}
