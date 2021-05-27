import React from 'react';
import ContactCard from './ContacCard';

export default function Contact() {
  return(
    <div>
      <ContactCard
        contact={{name:"Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(122) 555-123-123", email:"whiskerson@catnap.meow" }}
      />
      <ContactCard
        contact={{name: "Flufykin", imgUrl: "http://placekitten.com/400/200", phone: "(122) 555-345-123", email:"flufy@me.meow" }}
      />
    </div>
  )
}