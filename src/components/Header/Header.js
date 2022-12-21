import React, { useState } from 'react';
import './Header.css';
import SearchBox from "../SearchBox/SearchBox"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getList, removeFromList } from '../../state/actions/actions';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
    const listid = uuidv4();
    console.log(listid)
    const data1 = useSelector(state => state.filmData.listcount);
    const data = useSelector(state => state.filmData.list)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        listname: ""
    })
    const handleChange = (e) => {
        setState({ ...state, listname: e.target.value })
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {
        dispatch(getList(state.listname))
    }
    
    // const deletefromlist = (id) => {
    //     dispatch(removeFromList(id))
    // }


    return (
        <header className="header d-flex align-items-center justify-content-between">
            <h1 className="header__title">
                Movies
            </h1>
            <div className="end d-flex">
                <SearchBox />
                {/* <button className='btn btn-success ms-4'></button> */}
                <Button variant="primary" onClick={handleShow} className="ms-3">
                    List ({data1})
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Modal title</Modal.Title> */}
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={state.listname}
                                onChange={handleChange}
                            />
                        </InputGroup>

                    </Modal.Header>
                    <Modal.Body>
                        {data?.map(item => {
                            return (
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <p>{item.name}</p>
                                    <button className="btn btn-danger">x</button>
                                </div>
                            )
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" disabled={!state.listname} onClick={handleClick}>
                            <Link to={`/list/${listid}`} className="link">
                                Go to list
                            </Link>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </header>
    );
}

export default Header;