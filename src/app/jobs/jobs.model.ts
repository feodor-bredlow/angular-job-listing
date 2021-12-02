export type Document = {
  _links: {
    detail_de: {
      href: string
    }
  },
  title: string;
  company_name: string;
  place: string;
  publication_date: string;
  images: {url: string}[];
  preview: string;
  job_id: number;
}

export type JobsApi = {
  start?: number;
  rows?: number;
  documents?: Document[];
}

export type JobDetailApi = {
  template_profession?: string;
  template_text?: string;
}
