import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const state = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const setState = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad
  }

  return (
    <div>
      <Feedback state={state} setState={setState}/>
      <Statistics state={state}/>
    </div>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => props.setState.good(props.state.good + 1)} text="good"/>
      <Button onClick={() => props.setState.neutral(props.state.neutral + 1)} text="neutral"/>
      <Button onClick={() => props.setState.bad(props.state.bad + 1)} text="bad"/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }

  const Statistics = (props) => {
    const total = props.state.good + props.state.neutral + props.state.bad;
    const average = (props.state.good - props.state.bad) / total;
    const positive = (props.state.good / total) * 100;

    return (
      <div>
        <h1>statistics</h1>
        {total > 0 ? (
          <table>
            <tbody>
              <StatisticLine text="good" value={props.state.good} />
              <StatisticLine text="neutral" value={props.state.neutral} />
              <StatisticLine text="bad" value={props.state.bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={average} />
              <StatisticLine text="positive" value={`${positive} %`} />
            </tbody>
          </table>
        ) : null}
      </div>
    );
  };

  export default App
