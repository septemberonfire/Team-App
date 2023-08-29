import showBurgerMenu from "./scripts/burgerMenu";
import drawCards from "./scripts/drawFeedbackCards";
import slider from "./scripts/slider";
import {database} from "./scripts/getFirebaseDB";
import showPopup from "./scripts/modalBoxLogin";
import auth from "./scripts/auth";

await drawCards(database);

slider();
showBurgerMenu();
showPopup();
auth();
