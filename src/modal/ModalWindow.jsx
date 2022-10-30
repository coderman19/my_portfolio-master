import React from 'react'
import styles from './ModalWindow.module.css'
import Modal from 'react-modal'

export default function ModalWindow() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.modal}>
       <button className={styles.openWindow} onClick={() => setIsOpen(true)}>подробнее...</button>
      <Modal className={styles.reactModal} isOpen={modalIsOpen}>
        <button className={styles.closeWindow} onClick={() => setIsOpen(false)}>закрыть</button>
      </Modal>
    </div>
  )
}
