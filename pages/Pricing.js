// This is the Link API
import Link from "next/link";
import Header from "../components/Header";
import PricingHero from "../components/PricingHero";

const Pricing = () => (
  <div>
    <Header />
    <PricingHero />
    <style global jsx>{`
      body {
        margin: 0;
        height: 200vh;
        width: 100vw;
        background-image: linear-gradient(180deg, #fd9d52, #fd62e9, #fd62e9);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin: 0;
        font-size: 20px;
        -webkit-font-smoothing: antialiased;
        line-height: 1.3;
        background-color: white;
        color: #586371;
      }

      .s-container {
        padding-left: 8vw;
        padding:rigth: 8vw;
      }

      .m-container {
        padding-left: 4vw;
        padding-right: 4vw;
      }
    `}</style>
  </div>
);

export default Pricing;
