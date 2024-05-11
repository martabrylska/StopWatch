import './App.css'
import {Counters} from "./components/Counters/Counters.tsx";
import {Buttons} from "./components/Buttons/Buttons.tsx";
import {Results} from "./components/Results/Results.tsx";

export const App = () => {

    return (
        <>
            <Counters/>
            <Buttons/>
            <Results/>
        </>
    )
}
