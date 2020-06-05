import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";            // Dla akcji asynchronicznych
import reducers from "./reducers";
import { logger } from "redux-logger";      // Fajne loggowanie w konsoli zmian state przez logger
import { composeWithDevTools } from "redux-devtools-extension";   // Możliwość dodania wielu middleware'ów


const middleware = [thunk, logger];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
