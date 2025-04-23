// import React from 'react'
// import { useState } from 'react'
 
// const Contact = () => {

//     const [user, setUser] = useState({
        
//             Name: '',  email: '', subject: '', Message: ''
//         }
//     )
// let values,names
//     const data = (e) => {
// values = e.target.value
// names = e.target.name
// setUser({...user, [names]: values})
//     }

//     const send = async (e) => {
//         const {Name, email, subject, Message} = user
//         e.preventDefault()
//         const option = {
//             method: 'POST',
//             headers: {
//                 'Contant-Type' : 'aplication/json'
//             },
//             body: JSON.stringify({
//                 Name, email, subject, Message
//             })
//         }

//         const send = await fetch('https://react-ecommerce-contact-1363f-default-rtdb.firebaseio.com/Message.json', option)

//         if(send) {
//             alert("Message Sent");
//         }
//         else{
//             alert("Error Occured Message Sennt failed")
//         }

        
//     }
//   return (
//     <div className='contact'>
//         <div className="container">
//             <div className="form">
//                 <h2>#contact us</h2>
//                 <form method='POST'>
//                     <div className="box">
//                         <div className="lable">
//                             <h4>Name</h4>
//                         </div>
//                         <div className="input">
//                             <input type="text" placeholder='Name' value={user.name} name='Name'  onChange={data}/>
//                         </div>
//                     </div>
//                     <div className="box">
//                         <div className="lable">
//                             <h4>E-main</h4>
//                         </div>
//                         <div className="input">
//                             <input type="email" placeholder='E-mail' value={user.email} name='email'  onChange={data}/>
//                         </div>
//                     </div>
//                     <div className="box">
//                         <div className="lable">
//                             <h4>Subject</h4>
//                         </div>
//                         <div className="input">
//                             <input type="text" placeholder='subject' value={user.subject} name='subject'  onChange={data}/>
//                         </div>
//                     </div>
//                     <div className="box">
//                         <div className="lable">
//                             <h4>Message</h4>
//                         </div>
//                         <div className="input">
//                             <textarea placeholder='Message !' name='' onChange={data} value={user.Message}></textarea>
//                             {/* <input type="text" placeholder='Name' value='' name='Message'  onChange={data}/> */}
//                         </div>
//                     </div>
//                     <button type='submit' onClick={send}>Send</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [user, setUser] = useState({
        Name: '',  
        email: '', 
        subject: '', 
        Message: ''
    })

    const data = (e) => {
        const { value, name } = e.target
        setUser(prev => ({...prev, [name]: value}))
    }

    const send = async (e) => {
        e.preventDefault()
        const { Name, email, subject, Message } = user
        
        try {
            const response = await fetch('https://react-ecommerce-contact-1363f-default-rtdb.firebaseio.com/Message.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name, email, subject, Message })
            })

            if(response.ok) {
                alert("Message Sent Successfully!")
                setUser({ Name: '', email: '', subject: '', Message: '' })
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            alert("Error Occurred: Message Sent Failed")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Contact Us
                        <span className="block mt-2 text-indigo-600 text-lg">We'd love to hear from you</span>
                    </h2>
                    
                    <form onSubmit={send} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="Name"
                                    value={user.Name}
                                    onChange={data}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={data}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={user.subject}
                                onChange={data}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none"
                                placeholder="Subject"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                name="Message"
                                value={user.Message}
                                onChange={data}
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02] shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact