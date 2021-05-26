import React, {useState} from 'react';
import {Button} from '@polaris/elements';
import {Modal} from '@polaris/composed';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button>Buy this now!</Button>
      <Modal open={open} onDismiss={() => {}}>
        <button type='button' onClick={() => setOpen(true)}>
          Open modal
        </button>
        <Modal.Dialog>
          <button type='button' onClick={() => setOpen(false)}>
            Close modal
          </button>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default App;
