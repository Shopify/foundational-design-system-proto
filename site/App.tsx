import React, {useState} from 'react';
import {Modal} from '@polaris/composed';
import {Button, Card, Flex} from '@polaris/elements';
import {styled} from '../stitches.config';

const StyledApp = styled('div', {
  backgroundColor: '$background',
  width: '100vw',
  height: '100vh',
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <StyledApp>
      <Button type='button' onClick={() => setOpen(true)} variant='primary'>
        Open modal
      </Button>
      <Modal open={open} onDismiss={() => {}}>
        <Modal.Dialog accessibilityLabel='Modal test'>
          <Card>
            <Card.Section>
              <Flex justify='between'>
                Card header content
                <Button type='button' onClick={() => setOpen(false)}>
                  X
                </Button>
              </Flex>
            </Card.Section>
            <Card.Section>Main section</Card.Section>
            <Card.Section><Flex justify='between'>
                Card header content
                <Button type='button' onClick={() => setOpen(false)} variant='primary'>
                  Save changes
                </Button>
              </Flex></Card.Section>
          </Card>
        </Modal.Dialog>
      </Modal>
    </StyledApp>
  );
}

export default App;
