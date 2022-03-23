import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

function Locale() {
  return (
    <div>
      <h3>Info om festen</h3>
      <p>Bussar går från X till Y mellan dessa tider : </p>
      <p>
        Matinfo: 
        <LoremIpsum 
          p={3}
          avgSentencesPerParagraph={4}
        />
      </p>
    </div>
  )
}

export default Locale