import React, {useState, useCallback} from 'react';
import {Box, Button, Card, Flex, Icon, Text} from '@polaris/elements';
import {ReactComponent as CancelSmallMinorIcon} from '@polaris/icons/CancelSmallMinor.svg';
import {Modal} from '@polaris/composed';

const DesktopModal = () => {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} variant="primary">
        Open modal
      </Button>

      <Modal open={open} onDismiss={() => console.log('Modal dismissed 👋')}>
        <Modal.Overlay onClick={closeModal} />
        <Modal.Content
          aria-label="Modal"
          css={{minWidth: '100vw', '@bp1': {minWidth: '50vw'}}}
        >
          <Card>
            <Box
              as="button"
              onClick={closeModal}
              css={{position: 'absolute', top: '$2', right: '$2'}}
            >
              <Icon source={CancelSmallMinorIcon} />
            </Box>
            <Card.Section>
              <Text size="heading" css={{marginRight: '$sizes$icon'}}>
                Reach more shoppers with product tags
              </Text>
            </Card.Section>
            <Card.Section>
              <Text size="body">Body text.</Text>
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
};

export default DesktopModal;
