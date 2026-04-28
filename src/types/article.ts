export interface ArticleView {
  summary: string;
  sections: ArticleSection[];
}

export interface ArticleSection {
  label: string;
  heading?: string;
  body?: string[];
  bullets?: string[];
  quote?: string;
  stats?: ArticleStat[];
  chips?: string[];
}

export interface ArticleStat {
  number: string;
  label: string;
}

export interface ArticleContent {
  id: string;
  image?: string;
  businessView: ArticleView;
  technicalView: ArticleView;
}
