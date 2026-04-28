import { ArticleContent } from '../types/article';

export const projectArticles: ArticleContent[] = [
  // ─── Project 1: LTB Legal Chatbot ───────────────────────────────────────────
  {
    id: '1',
    image: '/images/law.webp',
    businessView: {
      summary:
        'Legal information is locked behind dense documents and expensive professional advice. This project asked whether an AI chatbot could bridge that gap — making landlord-tenant law in Ontario genuinely accessible to anyone with a phone.',
      sections: [
        {
          label: 'The Problem',
          heading: 'Legal access is a privilege, not a right',
          body: [
            'Navigating landlord-tenant disputes in Ontario requires understanding the Landlord and Tenant Board (LTB) process — a maze of procedures, forms, and timelines most tenants and landlords encounter only once, under stress.',
            'Existing resources are either too expensive (hiring a paralegal) or too generic (government FAQ pages). There was a clear gap for an AI assistant that could answer specific, contextual questions grounded in official LTB documentation.',
          ],
        },
        {
          label: 'The Solution',
          heading: 'An AI paralegal built on official sources',
          body: [
            'We scraped and indexed the official LTB website into a retrieval corpus, then built a Retrieval-Augmented Generation (RAG) pipeline that grounds every answer in official documentation — not hallucinated legal advice.',
            'Users can ask plain-English questions like "Can my landlord raise rent mid-lease?" and receive a direct, citation-backed answer drawn from the relevant LTB guideline.',
          ],
        },
        {
          label: 'Impact & Outcomes',
          stats: [
            { number: '3', label: 'LLM models benchmarked' },
            { number: 'RAG', label: 'Grounded pipeline prevents hallucination' },
            { number: '100%', label: 'Answers sourced from official LTB docs' },
          ],
        },
        {
          label: 'Why This Matters',
          bullets: [
            'Lowers the cost of understanding legal rights for non-lawyers',
            'Demonstrates how AI can democratise access to structured information',
            'A template for legal tech in any jurisdiction with published case law or regulatory docs',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'A production-style RAG pipeline comparing GPT-3.5, GPT-2, and LLaMA 2b on legal domain Q&A — combining corpus scraping, vector embedding, and benchmarked LLM evaluation.',
      sections: [
        {
          label: 'System Architecture',
          heading: 'RAG Pipeline Design',
          body: [
            'The pipeline has three distinct stages: (1) data ingestion — web-scraping and cleaning LTB documentation, (2) retrieval — chunking documents and encoding them as dense vector embeddings for semantic search, and (3) generation — passing the retrieved context plus the user query to the LLM.',
            'This architecture ensures factual grounding: the model cannot fabricate statutes because every answer is conditioned on retrieved source text.',
          ],
        },
        {
          label: 'Technology Stack',
          chips: ['Python', 'LangChain', 'FAISS', 'GPT-3.5', 'LLaMA 2b', 'GPT-2', 'BeautifulSoup', 'SentenceTransformers'],
        },
        {
          label: 'LLM Benchmarking',
          heading: 'Comparing models for a specialised domain',
          body: [
            'GPT-3.5 produced the most fluent and accurate answers but has latency and cost constraints for production. LLaMA 2b offered a self-hosted alternative with acceptable performance. GPT-2 served as the lower-bound baseline, confirming that vanilla language modelling without retrieval cannot reliably answer legal queries.',
          ],
          bullets: [
            'Evaluation metrics: answer relevance, faithfulness to source, and hallucination rate',
            'FAISS vector index enabled sub-100ms nearest-neighbour retrieval at scale',
            'Chunk overlap tuning was critical — short legal clauses require careful window sizing to preserve context',
          ],
        },
        {
          label: 'Key Engineering Decisions',
          bullets: [
            'Chose dense retrieval (vector embeddings) over sparse BM25 to handle paraphrase queries that don\'t share keywords with the source',
            'Separated the retrieval and generation steps to make the pipeline independently testable and swappable',
            'Applied prompt templating to always instruct the model to cite the retrieved chunk, reducing free-form generation risk',
          ],
        },
      ],
    },
  },

  // ─── Project 2: Social Media Influencer Marketing ───────────────────────────
  {
    id: '2',
    image: '/images/social_media.webp',
    businessView: {
      summary:
        'Influencer marketing budgets are wasted on follower counts that don\'t convert. This project built a data-driven ranking system using graph theory and Markov Chains to surface influencers whose audience actually engages.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Brands spend billions on influencer marketing but typically select partners by follower count — a metric that is easily gamed and weakly correlated with purchase influence.',
            'The real question is network propagation: which influencer\'s endorsement will spread deepest and fastest through a target audience segment?',
          ],
        },
        {
          label: 'The Solution',
          body: [
            'We collected data from over 10,000 Instagram profiles via API and modelled the follower network as a directed graph. Rather than raw follower counts, influence was measured by Markov Chain steady-state probability — the likelihood a random walk through the network lands on a given account.',
          ],
          stats: [
            { number: '10,000+', label: 'Instagram profiles analysed' },
            { number: '75%', label: 'Increase in targeted marketing effectiveness' },
          ],
        },
        {
          label: 'Business Value',
          bullets: [
            'Identifies micro-influencers with outsized propagation even with smaller follower bases',
            'Produces a ranked list any marketing team can act on without needing data science expertise',
            'Applicable to brand partnerships, campaign planning, and audience segmentation',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Graph-based influencer ranking using Markov Chain stationary distributions over an Instagram follower network — built on API-scraped data and visualised with Gephi.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'Instagram API', 'NetworkX', 'Gephi', 'NumPy', 'Pandas', 'Matplotlib'],
        },
        {
          label: 'Graph Construction',
          body: [
            'Each Instagram account is a node; each follower relationship is a directed edge. This forms a large sparse directed graph. We extracted the giant connected component for analysis — smaller isolated clusters were excluded as they lack network propagation value.',
          ],
        },
        {
          label: 'Markov Chain Ranking',
          body: [
            'Influence ranking mirrors PageRank\'s core intuition: an influencer whose content is shared by other high-influence accounts is more valuable than one with passive followers.',
            'The transition matrix was constructed from the normalised out-degree of each node. Power iteration was used to compute the stationary distribution efficiently on the sparse adjacency representation.',
          ],
          bullets: [
            'Gephi used for community detection (Louvain method) and visual cluster analysis',
            'Steady-state distribution converged within 30 iterations on the full 10,000-node graph',
            'Correlation between Markov rank and engagement rate was measured to validate the metric',
          ],
        },
      ],
    },
  },

  // ─── Project 3: 2048 AI ─────────────────────────────────────────────────────
  {
    id: '3',
    image: '/images/2048.webp',
    businessView: {
      summary:
        'Published as a research paper, this project systematically compared AI strategies for the game 2048 — a deceptively simple puzzle that encodes deep lessons about planning under uncertainty. The findings inform how AI agents handle stochastic, real-world decision-making.',
      sections: [
        {
          label: 'Why 2048?',
          body: [
            '2048 is a Markov Decision Process: each state is fully observable, but future tile placements are random. An agent that can\'t account for this randomness will fail — just as real-world AI deployments fail when they ignore environmental stochasticity.',
            'The game\'s small state space makes it tractable to study, while the stochastic tile spawning makes it rich enough to reveal meaningful differences between strategy classes.',
          ],
        },
        {
          label: 'Key Finding',
          quote: 'Domain-aware evaluation functions outperform pure lookahead search in high-variance environments — a lesson that transfers directly to real-world reinforcement learning deployment.',
        },
        {
          label: 'Research Outcomes',
          stats: [
            { number: '5', label: 'Strategies systematically compared' },
            { number: '1', label: 'Published research paper (IJDR)' },
            { number: '2020', label: 'Published at MIT World Peace University' },
          ],
          bullets: [
            'Heuristic-guided Expectimax consistently reached the 2048 tile across repeated trials',
            'Pure MCTS underperformed relative to its compute cost due to high variance rollouts',
            'Corner-and-monotonicity heuristic proved the single highest-impact addition to any search strategy',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'A rigorous implementation and comparative analysis of five decision-making strategies for the 2048 game: Random, Greedy, MCTS, Expectimax, and Heuristic-guided Expectimax — benchmarked across thousands of simulated games.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'NumPy', 'Matplotlib', 'Monte Carlo Tree Search', 'Expectimax', 'Reinforcement Learning'],
        },
        {
          label: 'Strategies Implemented',
          bullets: [
            'Random agent — baseline, selects a random valid move',
            'Greedy agent — maximises immediate score increment',
            'Monte Carlo Tree Search — lookahead with random rollouts, UCB1 selection policy',
            'Expectimax — chance nodes replace adversarial min nodes; models random tile spawning',
            'Heuristic-guided Expectimax — adds corner weight, monotonicity, and empty-cell heuristics to the evaluation function',
          ],
        },
        {
          label: 'Why Heuristics Win',
          body: [
            'MCTS\'s random rollouts are degraded by the game\'s stochastic tile placements — a bad random tile can destroy a strong board position mid-rollout, making the value estimate noisy.',
            'The corner heuristic encodes expert intuition: keep the highest tile in a corner and build a monotone "snake" pattern. This dramatically reduces the search space by pruning moves that violate board structure.',
          ],
          bullets: [
            'Monotonicity heuristic penalises boards where tiles are not in sorted order along any axis',
            'Empty-cell count rewards keeping the board open, preserving future move options',
            'Combined weight tuning via manual grid search — Bayesian optimisation was identified as a natural extension',
          ],
        },
      ],
    },
  },

  // ─── Project 4: Twitter Sentiment Analysis ──────────────────────────────────
  {
    id: '4',
    image: '/images/sentiment.webp',
    businessView: {
      summary:
        'During the COVID-19 pandemic, understanding public sentiment in real time was critical for health authorities, journalists, and businesses alike. This platform classified and visualised Twitter sentiment around COVID-19 as it evolved.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'At the height of the COVID-19 pandemic, public opinion shifted daily — driven by news cycles, policy announcements, and misinformation. Manually tracking this required teams of analysts.',
            'An automated sentiment classifier could surface trends instantly, giving decision-makers a real-time pulse on public mood.',
          ],
        },
        {
          label: 'The Solution',
          body: [
            'A live platform that ingests tweets, classifies them as positive, negative, or neutral using an LSTM model, and presents results on a dynamic web dashboard.',
            'The system achieved 87% accuracy — competitive with transformer baselines at the time — and updated the visualisation in near real-time.',
          ],
          stats: [
            { number: '87%', label: 'Classification accuracy' },
            { number: 'Real-time', label: 'Live dashboard updates' },
          ],
        },
        {
          label: 'Applications',
          bullets: [
            'Public health authorities tracking misinformation propagation',
            'Journalists monitoring evolving narratives across regions',
            'Brands managing reputation during the crisis',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'An LSTM-based sentiment classifier served via a Flask web application — combining NLP preprocessing, sequence modelling, and a live visualisation dashboard.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'TensorFlow/Keras', 'LSTM', 'Flask', 'Twitter API', 'NLTK', 'Matplotlib', 'HTML/CSS/JS'],
        },
        {
          label: 'Model Architecture',
          body: [
            'Text preprocessing pipeline: tokenisation → stop-word removal → padding to fixed sequence length. Word embeddings (GloVe 100d) encoded semantic relationships before feeding into a two-layer LSTM.',
            'The final dense layer with softmax output produces class probabilities for positive, negative, and neutral.',
          ],
          bullets: [
            'GloVe embeddings pre-trained on Twitter corpus (2B tweets) — domain-matched for slang and abbreviations',
            'Dropout layers (0.3) between LSTM layers to prevent overfitting on limited labelled training data',
            'Binary cross-entropy loss for the initial positive/negative prototype, extended to 3-class with categorical cross-entropy',
          ],
        },
        {
          label: 'Flask Application',
          body: [
            'The Flask backend exposes a REST endpoint that accepts a tweet text or Twitter search query, runs inference, and returns the predicted class with confidence score.',
            'A polling frontend fetches new predictions every 30 seconds and updates a Chart.js sentiment trend graph without full page reload.',
          ],
        },
      ],
    },
  },

  // ─── Project 5: Multimodal Gesture Recognition ──────────────────────────────
  {
    id: '5',
    image: '/images/vision.png',
    businessView: {
      summary:
        'Sign language is a rich communication system used by millions of people who are deaf or hard of hearing. This project built a system that recognises hand gestures and sign language in real time — a step toward breaking the communication barrier.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Automated sign language recognition has the potential to reduce reliance on human interpreters and make digital interfaces accessible to ASL users — but it requires handling both constrained datasets (greyscale letter images) and complex real-world video (full-HD gestures).',
          ],
        },
        {
          label: 'What Was Built',
          body: [
            'A real-time webcam demo that detects the hand region using MediaPipe, classifies the letter or gesture using a CNN/ResNet model, and overlays the top prediction live on screen. The system was validated across three distinct datasets with increasing complexity.',
          ],
          stats: [
            { number: '98%', label: 'Accuracy on ASL alphabet recognition' },
            { number: '76%', label: 'Language recognition (complex gestures)' },
            { number: '18', label: 'Gesture classes in HaGRID track' },
          ],
        },
        {
          label: 'Real-World Potential',
          bullets: [
            'Accessibility tool for ASL users interacting with digital devices',
            'Training aid for sign language learners with real-time feedback',
            'Foundational module for AR/VR gesture interfaces',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Three-track gesture recognition system: an ASL CNN (Keras/MNIST), a ResNet18 trained on HaGRID (PyTorch), and a Google GISLR word-level track — with a two-headed model architecture and MediaPipe pre-processing.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'PyTorch', 'TensorFlow/Keras', 'ResNet18', 'MediaPipe', 'OpenCV', 'OmegaConf', 'TensorBoard', 'NumPy'],
        },
        {
          label: 'ASL Track',
          body: [
            'Keras CNN trained on Sign Language MNIST (28×28 greyscale, 24 letter classes). MediaPipe detects the hand bounding box in each webcam frame, crops it, resizes to 28×28, and feeds the cropped region to the classifier — drastically reducing background noise.',
          ],
        },
        {
          label: 'HaGRID Track (ResNet18)',
          body: [
            'ImageNet-pretrained ResNet18 fine-tuned on HaGRID (550K+ full-HD images, 18 gesture classes). A two-headed model architecture simultaneously predicts gesture class and leading-hand side (left/right), improving accuracy on ambiguous gestures without a second inference pass.',
          ],
          bullets: [
            'CLI-first: fully config-driven training via YAML — swap backbones and datasets without touching Python code',
            'OmegaConf for reproducible experiment management and hyperparameter logging',
            'TensorBoard for real-time training curve monitoring and metric comparison across runs',
          ],
        },
        {
          label: 'Key Engineering Decision',
          quote: 'MediaPipe as a pre-processing gate transformed the problem: instead of asking the CNN to learn "find hand, then classify", we separated concerns cleanly — MediaPipe owns detection, the CNN owns classification.',
        },
      ],
    },
  },

  // ─── Project 6: Handwritten Text Recognition ────────────────────────────────
  {
    id: '6',
    image: '/images/plagarism.webp',
    businessView: {
      summary:
        'Academic plagiarism detection typically requires clean digital text. This project extended that capability to handwritten documents — enabling verification of essays, lab reports, and exam submissions in their original form.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Plagiarism detection tools like Turnitin only work on digital text. Handwritten submissions — common in exams, lab notebooks, and field research — are immune to automated detection, creating an accountability gap.',
          ],
        },
        {
          label: 'The Solution',
          body: [
            'A GRU-based neural network pipeline that extracts text from PDF documents containing handwritten content, enabling downstream plagiarism comparison across digitised handwriting samples.',
          ],
          stats: [
            { number: '85%', label: 'F1 score on handwriting extraction' },
            { number: 'PDF', label: 'End-to-end input format handled' },
          ],
        },
        {
          label: 'Applications',
          bullets: [
            'Exam integrity verification at universities',
            'Digitisation of historical handwritten archives',
            'Lab notebook authentication in research settings',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'An OCR pipeline using GRU neural networks for sequence-to-sequence handwriting recognition — from raw PDF input to character-level transcription, evaluated on F1 score.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'TensorFlow/Keras', 'GRU', 'OpenCV', 'PyMuPDF', 'NLTK', 'Scikit-learn'],
        },
        {
          label: 'Pipeline Architecture',
          body: [
            'Stage 1 — PDF parsing: Extract page images from PDF documents using PyMuPDF at high DPI for clean rasterisation.',
            'Stage 2 — Pre-processing: Binarisation, deskewing, and line segmentation using OpenCV to isolate individual text lines.',
            'Stage 3 — Recognition: A GRU network with CTC (Connectionist Temporal Classification) loss maps variable-length image sequences to character sequences without requiring explicit character segmentation.',
          ],
        },
        {
          label: 'Why GRU + CTC',
          body: [
            'Handwriting is inherently sequential — characters flow into each other. GRUs capture this temporal dependency efficiently compared to CNNs which treat the input spatially.',
            'CTC loss is the standard for sequence-to-sequence transcription tasks where the alignment between input frames and output characters is unknown — exactly the case with handwriting where strokes don\'t have fixed-width character boundaries.',
          ],
        },
      ],
    },
  },

  // ─── Project 7: Reality Mapper ──────────────────────────────────────────────
  {
    id: '7',
    image: '/images/augmented.webp',
    businessView: {
      summary:
        'Augmented reality overlays virtual content on real-world scenes — but only if the system accurately knows where "real world" coordinates are. Reality Mapper solves this calibration problem, enabling precise placement of virtual objects in live camera feeds.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Every AR application — from IKEA\'s furniture preview to industrial maintenance overlays — requires a mapping from 2D image pixels to 3D world coordinates. Without accurate camera calibration, virtual objects drift, tilt, or appear to float, destroying immersion.',
          ],
        },
        {
          label: 'What Was Built',
          body: [
            'A camera calibration pipeline using a chessboard pattern to compute intrinsic and extrinsic camera parameters. Once calibrated, the system maps any image-plane coordinate to its real-world 3D position, enabling accurate virtual object placement in live scenes.',
          ],
        },
        {
          label: 'Applications',
          bullets: [
            'Foundation for any AR application requiring metric-scale accuracy',
            'Robotics perception — calibrating robot cameras to world frames',
            'Industrial inspection overlays showing maintenance instructions on equipment',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'Chessboard-based camera calibration and homography estimation using OpenCV — computing intrinsic/extrinsic parameters for real-to-virtual coordinate mapping.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'Camera Calibration', 'Homography'],
        },
        {
          label: 'Camera Calibration',
          body: [
            'Corner detection on a known chessboard pattern provides 2D-3D point correspondences across multiple frames. `cv2.calibrateCamera()` solves for the intrinsic matrix (focal length, principal point) and distortion coefficients (radial and tangential) using a non-linear least-squares optimisation.',
          ],
          bullets: [
            'Re-projection error < 1.0 pixel achieved with 20+ calibration frames',
            'Distortion correction applied as a pre-processing step before homography estimation',
            'Extrinsic parameters (rotation + translation) computed per frame using PnP (Perspective-n-Point) solver',
          ],
        },
        {
          label: 'AR Overlay Pipeline',
          body: [
            'With calibrated camera parameters, virtual object vertices defined in world coordinates are projected onto the image plane via the full projection pipeline: world → camera → image. The result is a pixel-accurate overlay that respects perspective and occlusion.',
          ],
        },
      ],
    },
  },

  // ─── Project 8: Credit Risk Prediction ──────────────────────────────────────
  {
    id: '8',
    image: '/images/credit.webp',
    businessView: {
      summary:
        'Credit risk assessment determines whether a borrower is likely to default — a decision with direct revenue impact for lenders and life consequences for applicants. This project benchmarked four ML classifiers on a real dataset to identify the most reliable predictor.',
      sections: [
        {
          label: 'The Problem',
          body: [
            'Traditional credit scoring (FICO, VantageScore) relies on a narrow set of features and linear models. Machine learning opens the door to richer feature sets and non-linear decision boundaries — but only if the right model is chosen for the data and risk tolerance.',
          ],
        },
        {
          label: 'The Solution',
          body: [
            'A rigorous comparative study across KNN, Logistic Regression, Decision Trees, and Neural Networks on a 1,000-applicant dataset — evaluating not just accuracy but precision, recall, and AUC-ROC to surface the true cost of false negatives (missed defaults).',
          ],
          stats: [
            { number: '85%', label: 'Best predictive accuracy achieved' },
            { number: '1,000', label: 'Loan applicant records analysed' },
            { number: '4', label: 'ML models benchmarked' },
          ],
        },
        {
          label: 'Business Insights',
          bullets: [
            'Identified top contributors to default risk — enabling targeted risk mitigation',
            'Decision Tree provided an interpretable model that loan officers can audit and explain to regulators',
            'Neural Network achieved highest AUC but at the cost of explainability — a real-world tradeoff in regulated finance',
          ],
        },
      ],
    },
    technicalView: {
      summary:
        'End-to-end ML pipeline comparing KNN, Logistic Regression, Decision Trees, and Neural Networks for credit default prediction — including class imbalance handling, feature engineering, and ROC curve evaluation.',
      sections: [
        {
          label: 'Technology Stack',
          chips: ['Python', 'scikit-learn', 'TensorFlow/Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'imbalanced-learn'],
        },
        {
          label: 'Pipeline',
          bullets: [
            'EDA: correlation analysis, feature distribution plots, missing value imputation',
            'Feature engineering: encode categorical variables, scale continuous features, engineer debt-to-income ratio',
            'Class imbalance: SMOTE oversampling applied to the training set only (never the test set) to avoid data leakage',
            'Cross-validation: stratified 5-fold CV to ensure reliable performance estimates on the imbalanced dataset',
          ],
        },
        {
          label: 'Model Comparison',
          body: [
            'KNN: simple baseline, sensitive to feature scaling but no assumption about decision boundary shape.',
            'Logistic Regression: interpretable coefficients, calibrated probabilities — the choice for regulatory audit trails.',
            'Decision Tree: non-linear boundaries, full explainability via feature importance and tree visualisation.',
            'Neural Network (MLP): highest AUC at 0.87 but requires careful tuning and is a black box in regulated settings.',
          ],
        },
        {
          label: 'Key Insight',
          quote: 'AUC-ROC alone is misleading for imbalanced credit datasets — precision-recall curves reveal the true cost of false negatives that regulators and risk managers care about most.',
        },
      ],
    },
  },
];
