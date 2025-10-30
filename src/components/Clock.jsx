import styles from "../css/Clock.module.css"

const Clock = ({date}) => {
  const addZero = i => {
    if (i < 10) {i = "0" + i}
    return i;
  }

  return (
    <div>
      <div className={styles.clock}>{addZero(date.getHours())}:{addZero(date.getMinutes())}</div>
    </div>
  )
}

export default Clock;