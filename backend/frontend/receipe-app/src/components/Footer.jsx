import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
        <p style={styles.texte}></p>
    </footer>
  )
}


const styles = {
    footer: {
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
    },
    text: {
        margin: 0,
        fontSize: '14px'
    }
}

export default Footer