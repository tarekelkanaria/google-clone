interface DataIdentity {
  cacheId: string;
  title: string;
  link: string;
}
export interface SearchDataItemType extends DataIdentity {
  formattedUrl: string;
  htmlSnippet: string;
}
export interface SearchDataImageType extends DataIdentity {
  displayLink: string;
  image: {
    contextLink: string;
    thumbnailLink: string;
  };
}
export interface SearchDataType {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
  items: SearchDataItemType[] | SearchDataImageType[];
}
