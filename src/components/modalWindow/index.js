import React, { useState, useEffect } from 'react'
import { Button, Col, Modal, Row, Container } from 'reactstrap';

import Navigation from './navigation/index'
import Preview from '../preview/index'
import SetupProfile from './setupProfile/index'
import Covid from './covid/index'
import './index.scss';

const ModalWindow = props => {
  const [activeLink, setActiveLink] = useState(props.activeLink);

  // useEffect(() => setActiveLink(props.activeLink), [])
  // const handleChangeOpen = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   if (isOpen === false) {
  //     props.history.push('/')
  //   }
  // }, [isOpen])

  return (
    <Container fluid>
      <Row>
        <Col xs={11}>
          <Modal isOpen={props.isOpen} toggle={props.handleChangeOpen}>
            <Row className='modal-window__main-row'>
              <Col xs={12} md={3} lg={2}>
                <Navigation activeLink={activeLink} setActiveLink={name => setActiveLink(name)} />
              </Col>
              {props.story === 'COVID Message' && activeLink === 'story' && <Covid />}
              {activeLink === 'brand' && (
                <>
                  <Col className='modal-window__left' xs={12} md={9} lg={5}>
                    <SetupProfile setActiveLink={name => setActiveLink(name)} />
                  </Col>
                  <Col className='modal-window__right offset-md-3 offset-lg-0' xs={12} md={9} lg={5}>
                    <Preview />
                  </Col>
                </>
              )
              }
            </Row>
          </Modal>
        </Col>
      </Row>
    </Container >
  )
}

export default ModalWindow