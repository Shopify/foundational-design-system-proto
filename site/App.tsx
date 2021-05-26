import React, {useState} from 'react';
import {Modal, Button} from '@polaris/composed';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} onDismiss={() => {}}>
        <Button type='button' onClick={() => setOpen(true)} variant="primary">
          Open modal
        </Button>
        <Modal.Dialog>
          <Button type='button' onClick={() => setOpen(false)}>
            Close modal
          </Button>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default App;
