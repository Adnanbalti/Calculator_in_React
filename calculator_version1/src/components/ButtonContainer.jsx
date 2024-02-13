import style from './ButtonContainer.module.css'

const ButtonContainer = () => {
  const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "6", "7", "*", "8", "9", "/", ".", "="];

    return <div className={style.buttonContainer}>
      {buttonNames.map((buttonName) => <button className={style.button}>{buttonName}</button>)}
  </div>
}

export default ButtonContainer;