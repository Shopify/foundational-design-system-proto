import React, {useState} from 'react';
import {Button} from '@polaris/elements';
import {Modal} from '@polaris/composed';

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
            Close modal
          </Button>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default App;
