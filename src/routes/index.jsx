import Anagra from "../pages/anagra";
import Iscrizioni from "../pages/iscrizioni";

const routes = [
    {
        path: "/anagra",
        title: "Anagrafiche",
        component: Anagra
    },
    {
        path: "/iscrizioni",
        title: "Iscrizioni",
        component: Iscrizioni
    }
]

export default routes;