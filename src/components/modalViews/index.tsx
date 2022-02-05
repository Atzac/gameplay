import React, {ReactNode} from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../background";

import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalViews({ children, closeModal, ...rest } : Props) {
    return (
        <Modal
          statusBarTranslucent
          transparent
          animationType="slide"
          {...rest}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}>
              <View style={styles.container}>
                <Background>
                    <View style={styles.bar} />
                    { children }
                </Background>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    )
}