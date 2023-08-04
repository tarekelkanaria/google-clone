export interface SearchDataItemType {
  title: string;
  link: string;
  cacheId: string;
  formattedUrl: string;
  htmlSnippet: string;
}
export interface SearchDataType {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
  items: SearchDataItemType[];
}
