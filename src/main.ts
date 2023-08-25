import showBurgerMenu from "./scripts/burgerMenu";
import drawCards from "./scripts/drawFeedbackCards";
import slider from "./scripts/slider";
import {database} from "./scripts/getFirebaseDB";
import showPopup from "./scripts/modalBoxLogin";

await drawCards(database);

slider();
showBurgerMenu();
showPopup();
