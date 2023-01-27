import PAGEMG from "common/structure/PAGE/PAGE.mg.js"
import PAGEFR from "common/structure/PAGE/PAGE.fr.js"

function getPage() {
    if (window.lang == "MG") {
        return PAGEMG
    } else if (window.lang == "FR") {
        return PAGEFR
    }
}

export { getPage }