import { BookVolumeInfo } from "../../redux/state/stateType"

export type BookProps = {
    volumeInfo: BookVolumeInfo;
    errorMessage: string | null;
    isLoaded:boolean;
}