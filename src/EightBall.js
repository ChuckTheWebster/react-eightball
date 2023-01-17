import { useState } from "react";


const ANSWER_LIST = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


/** On click selects random message/color pair to
 * display on EightBall
 *
 * Props:
 *  - answers
 *
 * State:
 *  - color: answers[i].color
 *  - msg: 'Think of a Question'/answers[i].msg
 *
 * App -> Eightball
 */

function EightBall({ answers=ANSWER_LIST }) {
  const [ display, setDisplay ] = useState({
    msg: "Think of a Question.",
    color: "black "
  });

  /**TODO: small docstring fine
   * Changes msg and color displayed in ball
   */
  function changeBall() {
    setDisplay(randomMsgColor(answers));
  }

  //TODO: can we move this to css file if its dynamically changing
  const EightBallStyles = {
    backgroundColor: `${display.color}`,
    width: "250px",
    height: "250px",
    borderRadius: "50%",
  }
  
  // this to css file
  const msgStyles = {
    color: "white",
    alignText: "center",
    padding: "35%",
    fontSize: "20px"
  }

  return (
    <div
      className="EightBall"
      style={EightBallStyles}
      onClick={changeBall}>
      <h1
        className="EightBall-msg"
        style={msgStyles}>{display.msg}</h1>
    </div>
  )
}

/** Grab random object from list of objects
 * containing msg and color keys
 *
 * Return object
 * */
function randomMsgColor(answers) {
  const randIdx = Math.floor(Math.random() * answers.length);

  return answers[randIdx];
}

export default EightBall;
