import './Title.module.css'
export default function Title(props) {
  return (
    <header>
      <div className="top-title">{props.topTitle}</div>
      <div className="bottom-title">{props.bottomTitle}</div>
      <div className="line"></div>
    </header>
  )
}