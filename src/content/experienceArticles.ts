import { ArticleContent } from '../types/article';

export const experienceArticles: ArticleContent[] = [
  // ─── Experience 1: Attri AI ─────────────────────────────────────────────────
  {
    id: '1',
    image: '/images/law.webp',
    businessView: {
      summary:
        'At Attri, I built AI systems that directly contributed to closing business deals — translating ambiguous client requirements into production-grade agentic workflows. The flagship delivery was Attorney Draw Automation, a document-processing pipeline for a high-stakes legal workflow.',
      sections: [
        {
          label: 'Business Context',
          body: [
            'Attri is an AI consulting firm that builds custom AI products for enterprise clients. Every engagement starts with a business problem; success is measured in revenue closed and client outcomes, not lines of code.',
            'My role as an AI Solutions Engineer spanned the full client engagement lifecycle: requirements analysis, system design, engineering, and delivery.',
          ],
        },
        {
          label: 'Attorney Draw Automation',
          heading: 'Automating a $120K legal workflow',
          body: [
            'Attorney Draw is a specific legal billing process where attorneys submit draw requests — detailed documentation of work performed — that must be reviewed, validated, and approved before payment is released.',
            'Manual review was slow, error-prone, and expensive. We built a document-processing pipeline that automatically extracted, validated, and structured draw request data, reducing review time from days to hours and contributing ~$120K in closed revenue.',
          ],
        },
        {
          label: 'Business Impact',
          stats: [
            { number: '~$300K', label: 'Total revenue supported' },
            { number: '~$120K', label: 'Attorney Draw Automation alone' },
            { number: '75%', label: 'Reduction in development iteration time' },
          ],
        },
        {
          label: 'What Made the Difference',
          bullets: [
            'Translating vague legal requirements into precise, testable AI pipeline specifications',
            'Delivering working prototypes rapidly to maintain client confidence during complex engagements',
            'Re-architecting monolithic workflows into modular, independently testable components that clients could own and extend',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Agentic AI orchestration, RAG pipelines, and LLM evaluation in a production MLOps environment — rebuilding monolithic LLM workflows into modular, testable agentic components that cut iteration time by 75%.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'LangChain', 'LangGraph', 'RAG', 'GPT-4', 'FAISS', 'AWS', 'Docker', 'PostgreSQL', 'LLM Evaluation'],
        },
        {
          label: 'Agentic Architecture',
          body: [
            'The core technical challenge was re-architecting monolithic LLM pipelines — single, end-to-end prompt chains — into modular agentic workflows where each component has a well-defined input/output contract and can be tested independently.',
            'Each agent is a bounded context: document extraction agent, validation agent, summarisation agent, and output formatting agent communicate via structured message passing rather than shared state.',
          ],
          bullets: [
            'Reduced development iteration time by 75% — a failing extraction agent no longer breaks the entire pipeline',
            'Each agent is independently testable with mocked inputs, enabling CI-style regression testing of LLM components',
            'LangGraph used for stateful, branching agent orchestration where workflow paths depend on intermediate results',
          ],
        },
        {
          label: 'RAG Pipeline for Legal Documents',
          body: [
            'Attorney Draw documents are semi-structured: free-text narrative sections interspersed with tabular billing data. The RAG pipeline needed to handle both — using hybrid retrieval (dense + sparse) for narrative sections and structured extraction for tables.',
          ],
        },
        {
          label: 'LLM Evaluation Framework',
          body: [
            'Building production LLM systems requires systematic evaluation, not ad-hoc prompt testing. I implemented an evaluation harness scoring outputs on faithfulness, completeness, and hallucination rate across a curated golden dataset of draw request examples.',
          ],
        },
      ],
    },
  },

  // ─── Experience 2: Stealth Startup ──────────────────────────────────────────
  {
    id: '2',
    image: '/images/multi_modal.webp',
    businessView: {
      summary:
        'As a Founding AI Engineer at an early-stage stealth startup, I owned the entire AI product surface — from system design to deployment. In a founding engineer role, you don\'t have the luxury of specialisation; you build whatever the product needs next.',
      sections: [
        {
          label: 'The Role',
          body: [
            'Founding engineers at stealth startups work at maximum ownership and minimum process. I designed the AI system architecture, selected the model stack, wrote the core pipelines, and iterated based on direct user feedback — often within the same week.',
            'The scope changed constantly. What mattered was shipping working AI features fast enough to validate or invalidate product hypotheses.',
          ],
        },
        {
          label: 'Key Outcomes',
          stats: [
            { number: '91%', label: 'Task success rate achieved' },
            { number: '46%', label: 'Reduction in time-to-ship' },
          ],
        },
        {
          label: 'What a Founding AI Engineer Does',
          bullets: [
            'Designs the overall AI architecture before there\'s a codebase to build on',
            'Makes high-stakes model selection decisions with limited time and budget',
            'Ships production features without the safety net of established processes',
            'Evaluates AI output quality daily and translates failures into engineering fixes',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Built and shipped multi-agent systems using LangGraph — owning agent design, orchestration, evaluation, and iteration from prototype to production in a fast-moving startup environment.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'LangGraph', 'LangChain', 'OpenAI API', 'Anthropic', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis'],
        },
        {
          label: 'Multi-Agent System Design',
          body: [
            'LangGraph provides a directed graph abstraction for multi-agent workflows — each node is an agent or tool call, each edge is a conditional transition. This enabled building complex, stateful workflows (e.g., plan → execute → reflect → revise) that a single-prompt chain cannot handle.',
          ],
          bullets: [
            'Agent graph designed with explicit state machines to handle branching, retries, and human-in-the-loop escalation',
            'Separation between planner agents (high-level reasoning) and executor agents (tool calls, data retrieval)',
            '91% task success rate validated against a held-out evaluation set of real user tasks',
          ],
        },
        {
          label: 'Iteration Speed',
          body: [
            '46% reduction in time-to-ship came from three practices: (1) modular agent design enabling partial re-runs, (2) a lightweight evaluation harness that ran on every commit, and (3) prompt versioning that made rollbacks instant.',
          ],
        },
      ],
    },
  },

  // ─── Experience 3: EasyBee AI ───────────────────────────────────────────────
  {
    id: '3',
    image: '/images/code.png',
    businessView: {
      summary:
        'At EasyBee AI, I spent a year bridging the gap between ML research and production engineering — building the CI/CD infrastructure and LLM agent systems that let a small team ship AI features reliably and quickly.',
      sections: [
        {
          label: 'The Challenge',
          body: [
            'Many AI teams are fast at prototyping but slow at shipping. The bottleneck isn\'t model quality — it\'s infrastructure: how do you test an LLM change before it reaches users? How do you deploy a new model version without downtime? How do you scale inference when usage spikes?',
            'My work at EasyBee AI addressed these operational challenges directly.',
          ],
        },
        {
          label: 'Key Delivery',
          body: [
            'Re-architected the core ML system from a monolithic inference service into a suite of independent, modular LLM agents — each responsible for a single, well-defined task. This structural change unlocked parallel development, independent deployment, and clear ownership.',
          ],
          stats: [
            { number: '75%', label: 'Reduction in development time' },
            { number: '1 year', label: 'Engineering tenure' },
          ],
        },
        {
          label: 'Outcomes',
          bullets: [
            'ML engineers could ship features independently without coordinating a monolith deployment',
            'Automated CI/CD meant every PR got an evaluation run before merge',
            'AWS infrastructure scaling handled traffic spikes without manual intervention',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'CI/CD pipelines for ML workflows using GitHub Actions, AWS infrastructure for scalable model deployment, and modular LLM agent architecture — cutting development time by 75%.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'GitHub Actions', 'AWS (EC2, S3, Lambda)', 'Docker', 'LangChain', 'FastAPI', 'PostgreSQL', 'MLflow'],
        },
        {
          label: 'CI/CD for ML',
          body: [
            'Standard software CI/CD (lint, unit test, deploy) doesn\'t translate directly to ML systems — model evaluation requires running inference on a test set and computing quality metrics. I built a GitHub Actions pipeline that automates this: on every PR, inference runs against a golden evaluation set and blocks merge if quality regresses.',
          ],
          bullets: [
            'Evaluation step runs in a Docker container with pinned dependencies for reproducibility',
            'Metrics logged to MLflow for experiment tracking across model versions',
            'AWS Lambda handles lightweight inference endpoints with auto-scaling; EC2 handles GPU-intensive batch jobs',
          ],
        },
        {
          label: 'Monolith → Modular Agents',
          body: [
            'The original system was a single inference service handling all request types. Refactoring into modular agents meant each agent could be developed, tested, deployed, and scaled independently.',
            'Agent communication via a message queue (SQS) provided backpressure and decoupling — a slow downstream agent no longer blocked the entire pipeline.',
          ],
        },
      ],
    },
  },

  // ─── Experience 4: HER Heard ────────────────────────────────────────────────
  {
    id: '4',
    image: '/images/social_media.webp',
    businessView: {
      summary:
        'HER Heard is a social platform amplifying women\'s voices and stories — built through MIT\'s Sandbox innovation programme. My role covered full-stack development and the first NLP/AI features on the platform.',
      sections: [
        {
          label: 'The Mission',
          body: [
            'HER Heard aims to give women a dedicated, safe space to share their voices and stories. The platform needed to move fast — MIT Sandbox provides funding and mentorship for student-founded companies with a fixed timeline to prove traction.',
          ],
        },
        {
          label: 'Technical Leadership',
          body: [
            'I led a migration from Flutter (mobile-first) to a Node.js/Express.js/Firebase web stack — enabling faster iteration, better analytics, and a richer content experience. This migration improved application performance by 30% and unlocked data-driven product decisions.',
          ],
          stats: [
            { number: '30%', label: 'Performance improvement post-migration' },
            { number: 'MIT', label: 'Sandbox innovation programme' },
          ],
        },
        {
          label: 'AI/NLP Contributions',
          bullets: [
            'Content moderation classifier to automatically flag harmful content at scale',
            'Text classification for content discovery — surfacing stories to users likely to engage',
            'Conversational AI prototype for community engagement features',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Flutter → Node.js/Express.js/Firebase migration, NLP content classification, and content moderation — building the data infrastructure for a social platform under MIT Sandbox constraints.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Node.js', 'Express.js', 'Firebase', 'Flutter', 'Python', 'scikit-learn', 'Transformers', 'Google Cloud'],
        },
        {
          label: 'Stack Migration',
          body: [
            'Flutter was originally chosen for cross-platform mobile reach, but it limited web performance and made analytics instrumentation complex. The migration to Node.js/Express.js with Firebase as the database and auth layer gave us standard web tooling, better third-party integration, and faster backend iteration.',
          ],
          bullets: [
            '30% performance improvement from reduced JavaScript bundle size and server-side rendering',
            'Firebase Realtime Database → Firestore migration for better query flexibility and offline support',
            'Maintained feature parity with zero downtime using a feature-flag-gated cutover strategy',
          ],
        },
        {
          label: 'NLP Pipeline',
          body: [
            'Content moderation used a fine-tuned DistilBERT classifier trained on community-flagged examples plus public harmful text datasets. The model ran server-side on every content submission, flagging items for human review above a confidence threshold.',
          ],
          bullets: [
            'DistilBERT chosen over larger BERT variants for latency — content moderation is on the critical write path',
            'Active learning loop: human reviewer decisions fed back into the training set weekly',
            'Content discovery classifier used TF-IDF + Logistic Regression for interpretable topic tagging',
          ],
        },
      ],
    },
  },

  // ─── Experience 5: Intelligence Techsol ─────────────────────────────────────
  {
    id: '5',
    image: '/images/code.png',
    businessView: {
      summary:
        'My first professional ML role — building a production data pipeline at an Indian IT services company that reduced invoice reconciliation errors by 91.8% and gave me my first exposure to the gap between academic ML and real-world data.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Invoice data arrives in dozens of formats: PDFs, scanned images, Excel exports from legacy accounting systems. Manual extraction was slow, error-prone, and required dedicated staff who added no analytical value.',
          ],
        },
        {
          label: 'The Solution',
          body: [
            'A Python-based backend pipeline that ingested invoices across varied formats, extracted key fields (vendor, amount, date, line items) using OCR and rule-based extraction, and output structured records for reconciliation.',
          ],
          stats: [
            { number: '91.8%', label: 'Reduction in manual reconciliation errors' },
            { number: '1 year', label: 'Engineering tenure' },
          ],
        },
        {
          label: 'Impact',
          bullets: [
            'Freed reconciliation staff from manual data entry to higher-value analytical work',
            'Audit trail built into the pipeline — every extraction decision was logged and reviewable',
            'First production ML system experience: real data quality issues, stakeholder requirements, and operational constraints',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Python-based invoice extraction pipeline handling varied document formats — combining OCR, rule-based extraction, and validation logic to achieve 91.8% error reduction in manual reconciliation.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'Tesseract OCR', 'PyMuPDF', 'Pandas', 'Regex', 'OpenCV', 'SQLAlchemy', 'PostgreSQL'],
        },
        {
          label: 'Extraction Pipeline',
          bullets: [
            'PDF text extraction: pdfminer/PyMuPDF for text-layer PDFs; Tesseract OCR for scanned images',
            'Pre-processing: deskew, binarise, and denoise scanned invoices before OCR for accuracy improvement',
            'Field extraction: rule-based regex patterns for structured fields (invoice number, date, total); NER-style extraction for vendor names',
            'Validation layer: cross-check extracted totals against line-item sums; flag inconsistencies for human review',
          ],
        },
        {
          label: 'Lessons from Production Data',
          body: [
            'Academic datasets are clean; production invoices are not. Fonts vary, tables are inconsistent, and scans are rotated. The majority of engineering time went into robustness — handling edge cases that break brittle rule-based extractors.',
            'This experience shaped how I approach data quality in all subsequent ML projects: instrument early, log everything, and build explicit failure modes rather than silent degradation.',
          ],
        },
      ],
    },
  },
];
