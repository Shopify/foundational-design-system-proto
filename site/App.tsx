import React, {useState, useCallback} from 'react';
import {Button, Card, Flex, Text} from '@polaris/elements';
import {Modal} from '@polaris/composed';

function App() {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} variant="primary">
        Open modal
      </Button>

      <Modal open={open} onDismiss={() => console.log('Modal dismissed 👋')}>
        <Modal.Overlay onClick={() => setOpen(false)} />
        <Modal.Content aria-label="Modal">
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
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
