import React, { useEffect } from 'react';
import { Column, Row } from "simple-flexbox";

const Contact = () => {

  useEffect(() => {
    document.title = `Email Contact Form`;
  });

  return (
    <Row horizontal="spaced">
      <Column flexGrow={1} style={{width:'45%', padding: 5}}>
        xxx
      </Column>
      <Column flexGrow={1} style={{width:'55%', padding: 5}}>
        xxx
      </Column>
    </Row>
  )
}

export default Contact;