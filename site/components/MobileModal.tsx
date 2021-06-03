import React, {useState, useCallback} from 'react';
import {Box, Button, Card, Grid, Text} from '@polaris/elements';
import {Modal} from '@polaris/composed';

interface ModalProps {
  className?: string;
}

const MobileModal: React.FC<ModalProps> = ({className}) => {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} variant="primary">
        Open modal
      </Button>

      <Modal open={open} onDismiss={() => console.log('Modal dismissed 👋')}>
        <Modal.Overlay className={className} onClick={closeModal} />
        <Modal.Content className={className} aria-label="Modal">
          <Card css={{color: '$text', overflow: 'hidden'}}>
            <Box css={{padding: '$3'}}>
              <Text size="heading" variant="strong" css={{mb: '$2'}}>
                Mark as delivered?
              </Text>
              <Text size="body" variant="subdued">
                By marking this package delivered, you will no longer receive
                tracking updates.
              </Text>
            </Box>
            <Grid columns="2" css={{margin: '-1px', gridGap: '-1px'}}>
              <Button onClick={closeModal} css={{br: 0}}>
                Cancel
              </Button>
              <Button css={{br: 0, color: '$textPrimary'}}>
                Mark as delivered
              </Button>
            </Grid>
          </Card>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default MobileModal;
