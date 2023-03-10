import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import createContentData from '@/services/createContentData';
import { contentTypes } from '@/types/contentTypes';

export default function BioForm({userID}: {userID: string}) {
  const [show, setShow] = useState(true);
  const [radioValue, setRadioValue] = useState(1);
  const [contentType, setContentType] = useState("Business");
  const contentDescriptors = ['Business','Brand'];
  const buttons = [
    { name: 'Business', value: 1 },
    { name: 'Personal', value: 2 },
  ];
  const [frequencyType, setfrequencyType] = useState("1");
  const frequency = [
    { name: 'Daily', value: '1' },
    { name: 'Weekly', value: '2' },
    { name: 'Bi-Weekly', value: '3'},
    { name: 'Monthly', value: '4'},
  ];
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');

  const handleClose = () => setShow(false);
  function valueShifts(e:any){
    setRadioValue(e.currentTarget.value)
    setContentType(contentDescriptors[e.currentTarget.value - 1])
  }
  const saveData = () => {
    let frequencyName = frequency.find(i => i.value === frequencyType);
    let freq = 'Daily';
    if (frequencyName){
        freq = frequencyName['name'];
    }
    const content: contentTypes = {
        uid: userID,
        location: location,
        companyName: companyName,
        accountType: radioValue,
        description: description,
        frequency: freq
      }
    createContentData(content);
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Automated Content Creation Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {
            (radioValue == 1)
                ? <Form.Group className="mb-3" controlId="CompanyNameControl">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                    type="string"
                    placeholder="Dave's Tacos"
                    value = {companyName}
                    onChange={(e) => setCompanyName(e.currentTarget.value)}
                    />
                </Form.Group>
                : <div hidden></div>
            }
          <Form.Group className="mb-3" controlId="contentControl">
          <Form.Label>Whats the content for?</Form.Label>
          <br/>
          <ButtonGroup>
            {buttons.map((button, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                name="radio"
                value={button.value}
                checked={radioValue === button.value}
                onChange={(e) => valueShifts(e)}
            >
                {button.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="FrequencyControl">
          <Form.Label>Post Frequency?</Form.Label>
          <br/>
          <ButtonGroup>
            {frequency.map((freqbutton, timeIdx) => (
            <ToggleButton
                key={timeIdx}
                id={`freq-${timeIdx}`}
                type="radio"
                variant={timeIdx % 2 ? 'outline-primary' : 'outline-primary'}
                name="frequency"
                value={freqbutton.value}
                checked={frequencyType === freqbutton.value}
                onChange={(e) => setfrequencyType(e.currentTarget.value)}
            >
                {freqbutton.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
        </Form.Group>
            <Form.Group className="mb-3" controlId="LocationControl">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="string"
                placeholder="Austin"
                value={location}
                onChange={(e) => setLocation(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="DescriptionControl"
            >
              <Form.Label>Brief Description of your {contentType}</Form.Label>
              <Form.Control as="textarea" rows={3} 
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}/>
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