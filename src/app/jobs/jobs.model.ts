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
}

export type JobsApi = {
  start: number;
  rows: number;
  documents: Document[];
}


