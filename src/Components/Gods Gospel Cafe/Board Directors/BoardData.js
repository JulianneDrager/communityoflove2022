// import goldDivider from "../../../ggcf-images/mobile-board/mobile-gold-divider-board.png";
// import whiteDivider from "../../../ggcf-images/mobile-board/mobile-white-divider-board.png";
import cardStyle from "./css/card.module.css"

const pStyle = cardStyle.pStyle
const biancaStyle = cardStyle.biancaStyle
const divider = cardStyle.divider;

const boardCardData = [
  {
    id: 1,
    title: (
      <>
        <p className={pStyle}>PRESIDENT</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={goldDivider} */
          alt="divider"
        ></div>
        <p className={biancaStyle}>Bianca Faith Johnson J.D</p>
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <p>VICE PRESIDENT</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={whiteDivider} */
          alt="divider"
        ></div>
        <p>Debra Miller</p>

      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <p>TREASURER</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={whiteDivider} */
          alt="divider"
        ></div>
        <p>Brandi Carter</p>

      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        <p>TRUSTEE</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={whiteDivider} */
          alt="divider"
        ></div>
        <p>Jermell Griffin</p>

      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        <p>BOARD ADVISOR</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={whiteDivider} */
          alt="divider"
        ></div>
        <p>Bonnie Weaver</p>

      </>
    ),
  },
  {
    id: 6,
    title: (
      <>
        <p>SECRETARY</p>
      </>
    ),
    name: (
      <>
        <div
          className={divider}
          /* src={whiteDivider} */
          alt="silver-divider"
        ></div>
        <p>Kiana Newell</p>

      </>
    ),
  },
];
export default boardCardData;
