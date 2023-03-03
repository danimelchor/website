// Styles
import { ProjectType } from "types";
import { h2style, pstyle, astyle } from "../styles";

import DecentrapassLG from "./decentrapass-lg.png";
import Decentrapass from "./decentrapass.png";

export const decentrapass : ProjectType = {
  title: "Decentrapass",
  img: Decentrapass,
  imgLarge: DecentrapassLG,
  date: "06/18/2021",
  languages:
    "HTML,CSS,JavaScript,ReactJS,Solidity,Chrome Extension API,Firefox Extension API,Infura Storage",
  url: "https://github.com/Decentrapass",
  live: "https://decentrapass.org",
  description: (
    <>
      <h2 className={h2style}>Who created Decentrapass?</h2>
      <p className={pstyle}>
        Decentrapass has been coded 100% by me. I had difficulties finding
        qualified people for the project so I decided to take it as a challenge
        to complete the organization's website, web app, mobile app, and
        extension by myself. I will probably try to find other people interested
        in the future but I am currently too busy for this project. I will
        re-start the progress on Sept 2, 2021.
      </p>
      <h2 className={h2style}>What is Decentrapass?</h2>
      <p className={pstyle}>
        The best way to learn about Decentrapass is to go to{" "}
        <a className={astyle} href="https://decentrapass.org">
          it's organization's website
        </a>
        . To sum' it up, Decentrapass is a decentralized protocol for securely
        storing passwords inside the Ethereum network. The cyphered passwords
        are stored in a decentralized storage using AES encryption (the one used
        by the U.S. government).
      </p>
      <h2 className={h2style}>Why I created it</h2>
      <p className={pstyle}>
        The motivation for this project comes from two sources. First, a family
        member of mine felt uneasy about a company storing all their passwords,
        since this can go bankrupt or have a breach. Secondly, modern and secure
        password managers nowadays cost money. Therefore, I decided to create
        Decentrapass as a way to make sure passwords are never lost (since a
        shutdown in the Ethereum network is very unlikely), and as a free
        password manager (except{" "}
        <a
          className={astyle}
          rel="noreferrer"
          target="_blank"
          href="https://etherscan.io/gastracker"
        >
          the small fee
        </a>{" "}
        for the transaction in Ether).
      </p>
      <h2 className={h2style}>It's features</h2>
      <p className={pstyle}>
        The main features Decentrapass offers are the following: secure and
        protected password storage, full control over your passwords, super fast
        and easy to use, easily accessible from a new device, user governance
        for future upgrades/longevity of the project, and full transparency of
        the management and storing of your data.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
