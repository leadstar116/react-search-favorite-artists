import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserInfo } from '../_constants/users.interface';

type Props = {
    show: boolean,
    onHide: () => void,
    user: UserInfo
}

const DetailsModal = (props: Props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details for {props.user.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Url: </b>
                    {props.user.url}
                </p>
                <p>
                    <b>Listeners: </b>
                    {props.user.listeners}
                </p>
                <p>
                    <b>Mbid: </b>
                    {props.user.mbid}
                </p>
                <p>
                    <b>Streamable: </b>
                    {props.user.streamable
                        ? 'Yes'
                        : 'No'
                    }
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailsModal