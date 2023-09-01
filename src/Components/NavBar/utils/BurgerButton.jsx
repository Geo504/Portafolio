import style from './BurgerButton.module.css'

export const BurgerButton = ({open, whiteColor}) => {
  return (
    <div className={`${style.nav_icon} ${open?style.open:''}`}>
      <span className={`${open||whiteColor?'':style.black}`}></span>
      <span></span>
      <span></span>
    </div>
  )
}
