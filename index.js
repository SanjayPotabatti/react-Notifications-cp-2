const Notification = props => {
  //  Write your code here.
  const {text, url, style} = props
  return(
  <div className={style}>
    <img src={url}/>
    <p className="para">{text}</p>
  </div>
  )
}

const element = (
  //  Write your code here. 
  <div className="card">
    <h1 className="mainHeading">Notifications</h1>
    <Notification text="Iinformation Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" style="infoStyle"/>
    <Notification text="Success Message" url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" style="successStyle"/>
    <Notification text="Warning Message" url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" style="warningStyle"/>
    <Notification text="Error Message" url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" style="errorStyle"/>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))

