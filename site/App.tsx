import React, {useState} from 'react';
import {Modal} from '@polaris/composed';
import {Button, Card, Flex, Text} from '@polaris/elements';

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Flex space="extraLoose" direction="column">
      <Modal open={open} onDismiss={() => {}}>
        <Button type='button' onClick={() => setOpen(true)} variant="primary">
          Open modal
        </Button>
        <Modal.Dialog>
          <Card>
            <Card.Section>
              <Flex align="start" justify="between">
                <Text variant="strong" size={4}>
                  This card should have a title
                </Text>
                <Button type='button' onClick={handleClose}>Close</Button>
              </Flex>
            </Card.Section>
            <Card.Section>
              <Button type='button' onClick={handleClose}>
                Close modal
              </Button>
            </Card.Section>
          </Card>
          
        </Modal.Dialog>
      </Modal>
    </Flex>
  );
}

export default App;
