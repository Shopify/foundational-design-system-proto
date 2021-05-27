import React, {useState} from 'react';
import {Button, Icon} from '@polaris/elements';
import {Modal} from '@polaris/composed';
import {ReactComponent as CancelSmallMinor} from '@polaris/icons/CancelSmallMinor.svg';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onDismiss={() => {}}>
        <Button type="button" onClick={() => setOpen(true)} variant="primary">
          Open modal
        </Button>
        <Modal.Dialog ariaLabel="TODO: change this prop API">
          <Button type="button" onClick={() => setOpen(false)}>
            <Icon source={CancelSmallMinor} aria-label="Close modal" />
          </Button>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default App;
