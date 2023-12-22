import "./hero.css";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import Currency from "../currency/Currency";
import useCurrency from "../../hooks/useCurrency";
import { NavLink } from "react-router-dom";


const Hero = ({isScrolled}) => {
  const {currencies, isLoading} = useCurrency(4)
  return (
    <section id="home" className={`hero-section ${isScrolled ? 'active' : ''}`}>
      <img src={bitcoin} alt="bitcoin" className={`currency currency-bitcoin ${isScrolled ? 'bitcoin-fixed' : ''}`} />
      <img
        src={ethereum}
        alt="ethereum"
        className={`currency currency-ethereum ${isScrolled ? "ethereum-fixed" : ""}`}
      />
      <h1>
        TRACK AND TRADE <br />
        <span>CRYPTO CURRENCIES</span>
      </h1>
      <div className="currencies">
        {currencies.map((currency) =>
            <NavLink className='link' to={`/${currency.name}`}>
              <Currency currency={currency} key={currency.name} isLoading={isLoading} />
            </NavLink>
        )}
      </div>
    </section>
  );
};

export default Hero;
