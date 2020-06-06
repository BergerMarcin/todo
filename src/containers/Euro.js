import { connect } from "react-redux";
import Euro from "../components/Euro";


const mapStateToProps = (state) => {
  console.log(state);
  return ({
    euroBuyRate: state.euro.buyRate,
    euroSellRate: state.euro.sellRate,
  });
}

export default connect(mapStateToProps)(Euro);
