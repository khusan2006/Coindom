import React from "react";
import "./about.css";
import {
    IconChecklist,
    IconDeviceMobileMessage,
    IconMoneybag,
    IconPencilBolt,
    IconStack,
    IconWallet,
  } from "@tabler/icons-react";

const About = () => {
  return (
    <section id="choose" className="about-section">
      <h2 className="about-title">
        Why <span>Choose Us</span>
      </h2>
      <div className="box">
        <div className="box-left">
          <div className="item">
            <IconChecklist className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
          <div className="item">
          <IconDeviceMobileMessage className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
          <div className="item">
          <IconMoneybag className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
        </div>
        <div className="box-right">
          <div className="item">
          <IconPencilBolt className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
          <div className="item">
          <IconStack className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
          <div className="item">
          <IconWallet className="item-icon" />
            <div className="item-info">
                <h4 className="item-title">
                    CONNECT YOUR WALLET
                </h4>
                <p className="item-text">
                    Use Trust Wallet, Metamask or to connect to the app.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
