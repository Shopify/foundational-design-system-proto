import React, {useState, useCallback} from 'react';
import {Box, Button, Card, Grid, Text} from '@polaris/elements';
import {Modal} from '@polaris/composed';

interface ModalProps {
  className?: string;
}

const MobileModal: React.FC<ModalProps> = ({className}) => {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const heading = 'Heading';
  const body = 'Subheading';

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} variant="primary">
        Open modal
      </Button>

      <Modal open={open} onDismiss={() => console.log('Modal dismissed 👋')}>
        <Modal.Overlay className={className} onClick={() => setOpen(false)} />
        <Modal.Content className={className} aria-label="Modal">
          <Card css={{color: '$text', overflow: 'hidden'}}>
            <Box css={{padding: '$3'}}>
              <Text size="heading" css={{mb: '$2'}}>
                {heading}
              </Text>
              <Text size="body" variant="subdued">
                {body}
              </Text>
            </Box>
            <Grid columns="2" css={{margin: '-1px', gridGap: '-1px'}}>
              <Button onClick={closeModal}>Label</Button>
              <Button>Label</Button>
            </Grid>
          </Card>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default MobileModal;
