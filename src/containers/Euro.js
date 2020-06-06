import {connect} from "react-redux";
import Euro from "../components/Euro";
import {api} from "../api";


const mapStateToProps = (state) => ({
  euroBuyRate: state.euro.result.buyRate,
  euroSellRate: state.euro.result.sellRate,
});

const mapDispatchToProps = (dispatch) => ({
  getEuroRates: () => dispatch(api.euroRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Euro);
