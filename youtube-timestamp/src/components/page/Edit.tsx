import { RecoilRoot } from "recoil";
import { YouTubePlayer } from "../model/player/Player";
import { UrlForm } from "../model/url/UrlForm";

export const Edit: React.FC = () => {
    return (
        <RecoilRoot>
            <div>
                <h2>Edit</h2>
                <UrlForm />
                <YouTubePlayer />
            </div>
        </RecoilRoot>
    );
};
