import React, {useState, useCallback} from 'react';
import {Box, Button, Card, Flex, Icon, Text} from '@polaris/elements';
import {ReactComponent as CancelSmallMinorIcon} from '@polaris/icons/CancelSmallMinor.svg';
import {Modal} from '@polaris/composed';

// Could be a reusable utility style
const desktopOnlyStyles = {display: 'none', '@bp2': {display: 'block'}};

const DesktopModal = (props) => {
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
          css={{
            minWidth: '100vw',
            '@bp2': {minWidth: '50vw'},
          }}
        >
          {props.children}
          <Card>
            <Box
              as="button"
              onClick={closeModal}
              css={{position: 'absolute', top: '$2', right: '$2'}}
            >
              <Icon source={CancelSmallMinorIcon} />
            </Box>
            <Card.Section css={desktopOnlyStyles}>
              <Text size="heading" css={{marginRight: '$sizes$icon'}}>
                Reach more shoppers with product tags
              </Text>
            </Card.Section>
            <Card.Section>
              <Text size="body" css={{'@bp2': {py: '$6'}}}>
                Body text.
              </Text>
            </Card.Section>
            <Card.Section>
              <Flex justify="end" gap="3">
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
