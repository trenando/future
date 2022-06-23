export type LoadMoreProps = {
    totalItems: number;
    startIndex: number;
    maxResults: number;
    isLoaded: boolean;
    paginate: () => void;
}