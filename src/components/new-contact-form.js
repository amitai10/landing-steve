import React from 'react'

export default function NewContactForm() {
  return (
    <div>
       <form action="https://formspree.io/f/{form_id}" method="post">
          <label for="email">Your Email</label>
          <input name="Email" id="email" type="email"></input>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}
