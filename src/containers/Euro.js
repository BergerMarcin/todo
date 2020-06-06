import { connect } from "react-redux";
import Euro from "../components/Euro";
import {getEuroRates} from "../redux/actions/euroActions";


const mapStateToProps = (state) => {
  console.log(state);
  return ({
    euroBuyRate: state.euro.buyRate,
    euroSellRate: state.euro.sellRate,
  });
}

const mapDispatchToProps = (dispatch) => ({
  getEuroRates: () => dispatch(getEuroRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Euro);
