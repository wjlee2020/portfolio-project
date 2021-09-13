import { useState } from "react";
import ActionForm from "./subcomponents/ActionForm";
import Cards from "./subcomponents/Cards";
import PopUp from "./subcomponents/PopUp";
import PopUpCards from "./subcomponents/PopUpCards";
import SmGallery from "./subcomponents/SmGallery";
import Video from "./subcomponents/Video";

export default function About() {

    return (
        <main>
            <SmGallery />
            <PopUpCards />
            <Cards />
            <Video />
            <ActionForm />
            <PopUp />
        </main>
    );
}
