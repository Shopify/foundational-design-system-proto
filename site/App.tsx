import React, {useState, useCallback} from 'react';
import {Button, Card, Flex, Portal, Text} from '@polaris/elements';
import {Modal} from '@polaris/composed';

function App() {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  return (
    <Portal style={{width: '100%', height: '100%'}}>
      <Modal open={open} onDismiss={() => {}}>
        <Button type="button" onClick={() => setOpen(true)} variant="primary">
          Open modal
        </Button>
        <Modal.Dialog ariaLabel="TODO: change this prop API">
          <Card>
            <Card.Section>
              <Text size="heading">Title</Text>
            </Card.Section>
            <Card.Section>
              <Text size="body">body</Text>
            </Card.Section>
            <Card.Section>
              <Flex align="end" gap="3">
                <Button onClick={closeModal}>Cancel</Button>
                <Button variant="primary" onClick={closeModal}>
                  Save
                </Button>
              </Flex>
            </Card.Section>
          </Card>
        </Modal.Dialog>
        <Modal.Overlay
          css={{backgroundColor: 'rgb(76 175 80 / 0.5)'}}
          onClick={() => setOpen(false)}
        />
      </Modal>
    </Portal>
  );
}

export default App;
