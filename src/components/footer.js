import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#fffff' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        © 2024 Copyright: 
        <a className='text-dark ml-2' href='#'>
          Developer Angianovic
        </a>
      </div>
    </MDBFooter>
  );
}