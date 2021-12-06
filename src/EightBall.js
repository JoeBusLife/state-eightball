import { useState } from "react";
import "./EightBall.css"

const EightBall = ({answers}) => {
	let [bgColor, setBgColor] = useState("black");
	let [msg, setMsg] = useState("Think of a Question")

	const shake = () => {
		const newAnswer = answers[Math.floor(Math.random() * answers.length)]
		setBgColor(newAnswer.color);
		setMsg(newAnswer.msg);
	}

	const reset = () => {
		setBgColor("black");
		setMsg("Think of a Question");
	}

	return (
		<div className="EightBall">
			<div onClick={shake} className="EightBall-ball" style={{backgroundColor: bgColor}}>
				<b>{msg}</b>
			</div>
			<p>
				<button onClick={reset}>Reset</button>
			</p>
		</div>
	)
}

export default EightBall;