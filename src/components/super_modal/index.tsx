import Modal from 'react-native-modal'
import { ActivityLoadModified } from '../web_view_components'

type SuperModalProps = {
    isVisible: boolean
}

export function SuperModal ({isVisible}: SuperModalProps) {
    return (
        <Modal
            animationIn={"fadeIn"} 
            animationOut={'fadeOut'}
            animationOutTiming={500}
            isVisible={isVisible}
            backdropOpacity={0.6}
        >
            <ActivityLoadModified />
      </Modal>
    )
}