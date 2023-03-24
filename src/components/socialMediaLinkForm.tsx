import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ISocialMediaLinkInfo } from '@/types/contentTypes';
import linkSocialMediaData from '@/services/linkSocialMediaData';
export default function SocialMediaLinkForm({userID, socialMediaSite}: {userID: string, socialMediaSite: string}) {
  const [show, setShow] = useState(true);
  const [Name, setName] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const sMediaPlaceHolder = `Username for ${socialMediaSite} ex. TheRealWizardOfKansas123`

  const handleClose = () => setShow(false);
  const saveData = () => {
    const content: ISocialMediaLinkInfo = {
        uid: userID,
        username: Name,
        password: Password,
        socialsite: socialMediaSite

      }
    linkSocialMediaData(content);
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set your Login Info for: {socialMediaSite}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="LocationControl">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="string"
                placeholder={sMediaPlaceHolder}
                value={Name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="password control"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}