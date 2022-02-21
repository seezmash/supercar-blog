// styles
import '../styles/app.css'

// firebase functions
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: 'AIzaSyC84ZtBg7tgDLMwWvnuodgVxnJH3LyE3SI',
//   authDomain: 'sweat-cafe.firebaseapp.com',
//   projectId: 'sweat-cafe',
//   storageBucket: 'sweat-cafe.appspot.com',
//   messagingSenderId: '97280737575',
//   appId: '1:97280737575:web:052680de502eb9a184a902',
//   measurementId: 'G-ZQC1836KT8'
// }

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)

const NextApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      {/* <div className="fixed z-90 w-12 h-12 bottom-10 right-10 bg-black rounded shadow-md">
          <img
            className="absolute w-5 h-5 mt-3.5 ml-3.5 fill-current"
            src="/icons/ui/arrow_upward_white_24dp.svg"
            alt=""
          />
        </div> */}
      {/* <Component {...pageProps} /> */}
    </>
  )
}

export default NextApp
