import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";


const Result = ({success, msg}) => {
    return (
        <>
            {success && (
                <p className="text-success">{msg}</p>
            )}
            {!success && (
                <p className="text-danger">{msg}</p>
            )}
        </>
    )
}

function ContactForm({ props, formStyle }) {
    const [result, showresult] = useState(false);
    const [rmsg, setRmsg] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [verified, setVerified] = useState(false)
    const name = useRef('')
    const emailAddress = useRef('')
    const phone = useRef('')
    const subject = useRef('')
    const msg = useRef('')
    const recaptcha = useRef()

    const onChange = () => {
        setVerified(true)
    }


    const sendEmail = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name.current.value)
        formData.append('emailAddress', emailAddress.current.value)
        formData.append('phone', phone.current.value)
        formData.append('subject', subject.current.value)
        formData.append('msg', msg.current.value)

        console.log(name.current.value, emailAddress.current.value, phone.current.value, subject.current.value, msg.current.value)
        fetch('http://brdigitech.com/send_email.php', {
            method: 'post',
            body: formData
        }).then(res => res.json())
            .then(rs => {
                console.log(rs)
                setVerified(false)
                recaptcha.current.reset()
                showresult(true)
                e.target.reset()
                setRmsg(rs.msg)
                setIsSuccess(rs.success)
            })
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input
                    ref={name}
                    type="text"
                    name="fullname"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    ref={emailAddress}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    ref={phone}
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                />
            </div>


            <div className="form-group">
                <input
                    ref={subject}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                />
            </div>

            <div className="form-group">
                <textarea
                    ref={msg}
                    name="message"
                    placeholder="Your Message"
                    required
                >
                </textarea>
            </div>

            <div className="form-group">
                <ReCAPTCHA
                    ref={recaptcha}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    theme='dark'
                />
            </div>

            <div className="form-group ">
                <button disabled={!verified} className="btn-default btn-large">Submit Now</button>
            </div>

            <div className="form-group">
                {result ? <Result success={isSuccess} msg={rmsg} /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
