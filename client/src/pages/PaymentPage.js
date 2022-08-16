
import { Link } from "react-router-dom";


function PaymentPage(props) {
    const onClickB = () => {
        alert('this is a demo site cant buy stuff')
    }

    return (
        <div className="paymentDiv" style={{ paddingTop: '30px', marginLeft: '25vw'}}>
            <h1>Enter Payment Details</h1>
            <div>
                <label >Credit Card number </label>
                <input style={{ width: '400px' }}></input>
            </div>
            <div style={{ paddingTop: '15px' }}>
                <label >Experation date </label>
                <input ></input>
                <label style={{ paddingLeft: '15px' }}>CVC </label>
                <input></input>
            </div>
            <div style={{ paddingTop: '15px' }}>
                <label>Country </label>
                <input></input>
                <label style={{ paddingLeft: '15px' }}>City </label>
                <input></input>
            </div>
            <div style={{ paddingTop: '15px' }}>
                <label>Address </label>
                <input></input>
            </div>
            <div style={{ paddingTop: '25px' }}>
                <Link to="/">
                    <button onClick={onClickB} style={{ width: '10vw', height: '5vh', fontSize: '1.3em' }}>Buy</button>
                </Link>
            </div>

        </div>
    )

}



export default PaymentPage