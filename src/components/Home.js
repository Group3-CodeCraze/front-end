import { useLocation } from "react-router-dom";

function Home() {
    const { state } = useLocation();

    return <>
        {state ? (<h1>Home Page {state.username}</h1>) : (<h1>Home Page</h1>)}

    </>
}

export default Home