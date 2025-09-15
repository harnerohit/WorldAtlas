import React from 'react'

const handleFormSubmit = (formData) =>{
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};
const Contact = () => {
  return (
    <div>
      <>
      <section className='section-contact'>
        <h2 className='container-title'>Contact Us</h2>
      
      <div className='contact-wrapper container'>

        <form action={handleFormSubmit}>
          <input type="text"
          required
          autoComplete='false'
          placeholder='Enter your name'
          name='username'
          className='form-control'
          />

          <input type="email"
          required
          autoComplete='false'
          placeholder='Enter your email'
          name='email'
          className='form-control'
          />

          <textarea className='form-control'
          rows='10'
          placeholder='Enter your message'
          name='message'
          required
          autoComplete='off'          
          ></textarea>

          <button type='submit' value='send'>Send</button>

        </form>
        </div>
      </section>
      </>
    </div>
  )
}
 
export default Contact
